type ModelReducerActions <T> = {
    type: "UPDATE"
    data: {
        key: keyof T
        value: unknown
    }
} | {
    type: "SYNC"
    data: Partial<T>
} | {
    type: "RESET" | "VALIDATE"
}