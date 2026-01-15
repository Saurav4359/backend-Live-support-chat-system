import z, { email } from "zod";
export const Signup = z.object({
    name: z.string(),
    email: z.email(),
    password: z.string(),
    role: z.enum(["admin", "supervisor", "agent", "candidate"]),
    supervisorId: z.string().optional(),
});
//# sourceMappingURL=Validation.js.map