import {useEffect, useReducer} from 'react'
import CreateModelReducer from '@/shared/models/form'
import validators from './validators'
import generateDefault from './default'
import createModelForm from '@/shared/models/form'

function useUser(data?: Partial<UserData>) {

    const form = createModelForm(generateDefault, validators, data)
    
    return form
}

export default useUser