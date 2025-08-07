type UpdateCommit = {
    update: (target: IDBObjectStore) => number;
    version: number;
    reverse: (target: IDBObjectStore, commit: number) => number;
}