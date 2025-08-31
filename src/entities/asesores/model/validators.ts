import UserValidators from "@/entities/users/model/validators";
import ObjectStatus from "@/shared/constants/status";
import z from "zod";

const AsesorValidators : z.ZodType<AsesorData> = z.object({
    // id: z.uuid(),
    id: z.uuid(),
    user: UserValidators.optional(),
    status: z.enum(ObjectStatus),
    
});
export default AsesorValidators