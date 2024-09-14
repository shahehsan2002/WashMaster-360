import {z} from "zod";
import { USER_Role, USER_STATUS,  } from "./user.constants";

const createAdminValidations = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string(),
    phone: z.string(),
    address: z.string(),
    role: z.nativeEnum(USER_Role).default(USER_Role.ADMIN),
    status: z.nativeEnum(USER_Role).default(USER_STATUS.ACTIVE),
})

export const userValidations = {
    createAdminValidations
}