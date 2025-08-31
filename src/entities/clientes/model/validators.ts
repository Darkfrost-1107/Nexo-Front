import AsesorValidators from "@/entities/asesores/model/validators";
import UserValidators from "@/entities/users/model/validators";
import ObjectStatus from "@/shared/constants/status";
import z from "zod";

const ClientValidators : z.ZodType<ClienteData> = z.object({
    // id: z.uuid(),
    id: z.uuid(),
    user: UserValidators.optional(),
    asesor: AsesorValidators.optional(),
    status: z.enum(ObjectStatus),
});

export default ClientValidators