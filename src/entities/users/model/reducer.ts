type ObjectActions = "UPDATE" | "SYNC" | "RESET" | "VALIDATE"

type UserActions = {
    type: ObjectActions
    data: unknown
} | {
    type: "UPDATE" | "SYNC"
    data: Partial<UserData>
} | {
    type: "RESET"
    data: undefined
}

type UserState = {
    data: UserData,
    errors: Partial<Record<keyof UserData, string>>
    isValid: boolean
}

function reducer(state: UserState, action: UserActions){
    switch(action.type){
        case "RESET":
            return {
                errors : {}
                data : generateDefault()
                isValid: false
            }
        case "UPDATE":
            return { 
                errors : validateData(action.data)
                data: 
                isValid: false
            }

        case "SYNC":
            return {
                errors : validateData(action.data)
                data: 
                isValid: false
            }
        
        case "VALIDATE":
            let errs = validateData(state.data)
            return {
                errors: errs
                data: state.data
                isValid: true
            }
    }
}

function validateData()

function generateDefault(data: UserData){

}

export default reducer

export generateDefault
