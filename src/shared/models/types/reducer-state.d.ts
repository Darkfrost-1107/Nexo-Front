type ModelReducerState<T> = {
    data: T
    errors: Partial<Record<keyof T, string>>
    isValid: boolean
}