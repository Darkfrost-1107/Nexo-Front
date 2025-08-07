
function OnSuccess(event: Event) {
    console.log('Success:', event);
}

function OnError(event: Event) {
    console.error('Error occurred:', event);
}


function OnUpgradeNeeded(event: IDBVersionChangeEvent){
    console.log('Upgrade needed:', event);
    const db = (event.target as IDBOpenDBRequest).result;

    switch(event.oldVersion) {
        case undefined:
        case 0:
            if (!db.objectStoreNames.contains('versionStore')) {
                const objectStore = db.createObjectStore('versionStore', { keyPath: 'objectName' });
                objectStore.createIndex('version', 'version', { unique: false });
            }
    }
}

export {
    OnSuccess,
    OnError,
    OnUpgradeNeeded
}