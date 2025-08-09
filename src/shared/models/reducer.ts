import {z} from 'zod'
import generateDefaultModelState from './default'

function createModelReducer<T>(generateDefault: GenerateDefaultFunction<T>, validators: z.ZodType<T>, data?: Partial<T>)
: [ (bef: ModelReducerState<T>, act: ModelReducerActions<T>) => ModelReducerState<T> , ModelReducerState<T> ]
{

    function reducer(state: ModelReducerState<T>, action: ModelReducerActions<T>) : ModelReducerState<T>{
        const new_errs = state.errors
        const new_data = state.data
        switch(action.type){
            case "RESET":
                return {
                    errors : {},
                    data : generateDefault(),
                    isValid: false
                }
    
            case "UPDATE":
                // errs[action.data.key] = validateData({
                //     type: "PARTIAL",
                //     data: action.data.value,
                //     key: action.data.key
                // }) as string

                new_data[action.data.key] = action.data.value as T[keyof T]
                
                return { 
                    errors : new_errs,
                    data: new_data,
                    isValid: false
                }
    
            // case "SYNC":
            //     return {
            //         errors : validateData(action.data)
            //         data: 
            //         isValid: false
            //     }
            
            // case "VALIDATE":
            //     return {
            //         errors: errs
            //         data: state.data
            //         isValid: true
            //     }
            default:
                return state
        }
    }

    const initialState = generateDefaultModelState(generateDefault, validators, data)

    return [reducer, initialState]
}

export default createModelReducer