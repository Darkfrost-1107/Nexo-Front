import ObjectStatus from "@/shared/constants/status";
import z from "zod";

const validators : z.ZodType<UserData> = z.object({
    id: z.uuid(),
    username: z.string(),
    names: z.string(),
    email: z.email(),
    phone_number: z.string(),
    user_type: z.string(), // Adjust type if it's an enum or specific values
    created_date: z.string(), // or z.date() if it's a Date
    updated_date: z.string(), // or z.date()
    status: z.nativeEnum(ObjectStatus), // Use z.nativeEnum or z.enum([...]) to match ObjectStatus
    // Add other required fields from UserData here, for example:
    // last_name: z.string(),
    // created_at: z.string(), // or z.date() if it's a Date
    // updated_at: z.string(), // or z.date()
    // etc.
});
export default validators