import meta from "@/stories/Button.stories";
import { OnError, OnSuccess, OnUpgradeNeeded } from "./handlers";

const DBOpenRequest = window.indexedDB.open('nexo', 1);

DBOpenRequest.onsuccess = OnSuccess;

DBOpenRequest.onerror = OnError;

DBOpenRequest.onupgradeneeded = OnUpgradeNeeded;

class IndexedDBConnector {

    private static makeCommits (metadata: DBObjectUpdateData, objectStorage: IDBObjectStore, version: number) {

        const versionTX = this.openObjectStoreTX("versionStore", 'readwrite');

        for (const commit of metadata.commits) {

            if(commit.version <= version) {
                continue;
            }

            if(!commit.reverse(objectStorage, commit.update(objectStorage))) {
                break;
            }

            const request = versionTX.objectStore("versionStore").put({
                objectName: metadata.objectStoreName,
                version: commit.version
            });
        }

        versionTX.commit();
    }

    static upgradeObjectStore(metadata : DBObjectUpdateData) {
        const db = DBOpenRequest.result;
        const versionTX = this.openObjectStoreTX("versionStore", 'readwrite');

        let objectStore: IDBObjectStore;
        let currentVersion = -1;
        let request: IDBRequest;


        if (!db.objectStoreNames.contains(metadata.objectStoreName)) {
            objectStore = db.createObjectStore(metadata.objectStoreName, { keyPath: 'id' });
            request = versionTX.objectStore("versionStore").add({
                objectName: metadata.objectStoreName,
                version: currentVersion 
            })
            request.onsuccess = () => {
                this.makeCommits(metadata, objectStore, currentVersion);
            }
            // metadata.updateCommits(objectStore);
        } else {
            objectStore = db.transaction(metadata.objectStoreName, 'readwrite').objectStore(metadata.objectStoreName);
            // metadata.updateCommits(objectStore);
            request = versionTX.objectStore("versionStore").get(metadata.objectStoreName);
            request.onsuccess = (event) => {
                const request = event.target as IDBRequest;
                const result = request?.result;
                if (result) {
                    currentVersion = result.version;
                    this.makeCommits(metadata, objectStore, currentVersion);
                }
            };
        }
    
    }

    private static openObjectStoreTX(objectStoreName: string, mode: "readonly" | "readwrite"){
        const tx = DBOpenRequest.result.transaction(objectStoreName, mode)
        return tx
    }

    static getAssets({objectStoreName} : DBConnectorAssetParams, next?: Function){
        const tx = this.openObjectStoreTX(objectStoreName, "readonly")
        const store = tx.objectStore(objectStoreName)
        
        const req = store.getAll()

        return HandleRequest(req, next)
    }

    static getResource({objectStoreName, key}: DBConnectorIndexParams, next?: Function){
        const tx = this.openObjectStoreTX(objectStoreName, "readonly")
        const store = tx.objectStore(objectStoreName)

        const req = store.get(key)

        return HandleRequest(req, next)
    }

    static updateResource({objectStoreName, data}: DBConnectorResourceParams, next?: Function){
        const tx = this.openObjectStoreTX(objectStoreName, "readwrite")
        const store = tx.objectStore(objectStoreName)

        const req = store.put(data)

        return HandleRequest(req, next)
    }

    static addAsset({objectStoreName, data}: DBConnectorResourceParams, next?: Function){
        const tx = this.openObjectStoreTX(objectStoreName, "readwrite")
        const store = tx.objectStore(objectStoreName)

        const req = store.add(data)

        return HandleRequest(req, next)
    }

    static deleteAsset({objectStoreName, key}: DBConnectorIndexParams, next?: Function){
        const tx = this.openObjectStoreTX(objectStoreName, "readwrite")
        const store = tx.objectStore(objectStoreName)

        const req = store.delete(key)

        return HandleRequest(req, next)
    }
}

function HandleRequest(req: IDBRequest, next?: Function){
    req.onsuccess = (event) => {
        const target = event.target as IDBRequest
        const result = target.result
        next?.(result)
    }

    req.onerror = (event) => {

    }

    return req
}

export default IndexedDBConnector;