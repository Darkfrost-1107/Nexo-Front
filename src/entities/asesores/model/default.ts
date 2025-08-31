import ObjectStatus from "@/shared/constants/status"
import { v4 as uuidv4 } from "uuid"

function generateDefault(data?: Partial<AsesorData>): AsesorData{
    data = data ?? {}
    return {
        id: uuidv4(),
        user: undefined,
        status: ObjectStatus.ACTIVE,
    }
}

export default generateDefault