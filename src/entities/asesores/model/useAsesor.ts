import createModelForm from "@/shared/models/form"
import generateDefault from "./default"
import AsesorValidators from "./validators"

export default function useAsesor(data: AsesorData){

    const form = createModelForm(generateDefault, AsesorValidators, data)

    return form

}
