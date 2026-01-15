import z from "zod";
export declare const Signup: z.ZodObject<{
    name: z.ZodString;
    email: z.ZodEmail;
    password: z.ZodString;
    role: z.ZodEnum<{
        admin: "admin";
        supervisor: "supervisor";
        agent: "agent";
        candidate: "candidate";
    }>;
    supervisorId: z.ZodOptional<z.ZodString>;
}, z.z.core.$strip>;
//# sourceMappingURL=Validation.d.ts.map