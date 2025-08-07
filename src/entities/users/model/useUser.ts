import {useReducer} from 'react'
import reducer, {generateDefault} from './reducer'

function useUser(data: UserData){
    useReducer(reducer, generateDefault(data))
}


export default useUser