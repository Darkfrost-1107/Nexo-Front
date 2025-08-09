function generateDefaultModelState<T>(generateDefault: GenerateDefaultFunction<T>, validators: ModelValidator, data?: Partial<T>): ModelReducerState<T>{
    return {
        data: generateDefault(data),
        errors: {},
        isValid: false,
    }
}

export default generateDefaultModelState