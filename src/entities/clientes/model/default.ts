import ObjectStatus from "@/shared/constants/status"
import { v4 as uuidv4 } from "uuid"

function generateDefault(data?: Partial<ClienteData>): ClienteData{
    data = data ?? {}
    return {
        id: uuidv4(),
        user: undefined,
        asesor: undefined,
        status: ObjectStatus.ACTIVE,
    }
}

export default generateDefault