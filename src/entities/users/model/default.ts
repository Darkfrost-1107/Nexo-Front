import ObjectStatus from '@/shared/constants/status'
import {v4 as uuidv4 } from 'uuid'

type ValidateDataParams = {
    type: "SINGLE"
    data: unknown,
    key: keyof UserData
} | {
    type: "PARTIAL" 
    data: Partial<UserData>
} | {
    type: "TOTAL"
    data: UserData
}

type ValidateDataResult = {
    type: "SINGLE"
    result: string | undefined
} | {
    type: "PARTIAL" | "TOTAL"
    result: Partial<Record<keyof UserData, string>>
}

function validateData(params : ValidateDataParams): ValidateDataResult {
    switch(params.type){
        case "SINGLE":
            return {
                type : params.type,
                result: undefined //validator[key](data)
            }
        case "PARTIAL":
            // let errs = {}
            // for(const key in data) {
            //     let err = validator[key](data)
            //     errs[key] = err
            
            // }
            // for()
            return {
                type: params.type,
                result: {}
            }
        case "TOTAL":
            return {
                type: params.type,
                result: {}
            }
    }
}

function generateDefault(data?: Partial<UserData>): UserData{
    data = data ?? {}
    return {
        id: uuidv4(),
        email: "",
        names: "",
        username: "",
        phone_number: "",
        user_type: "",
        updated_date: "",
        created_date: "",
        status: ObjectStatus.ACTIVE,
    }
    
}

export default generateDefault