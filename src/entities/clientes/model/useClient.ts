import createModelForm from "@/shared/models/form"
import generateDefault from "./default"
import ClientValidators from "./validators"

export default function useClient(data: Partial<ClienteData>){

    const form = createModelForm(generateDefault, ClientValidators, data)

    return form

}
