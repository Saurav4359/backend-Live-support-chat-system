import mongoose from "mongoose";
export declare const User: mongoose.Model<{
    name: string;
    email: string;
    password: string;
    role?: "admin" | "supervisor" | "agent" | "candidate" | null;
    supervisorId?: mongoose.Types.ObjectId | null;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    name: string;
    email: string;
    password: string;
    role?: "admin" | "supervisor" | "agent" | "candidate" | null;
    supervisorId?: mongoose.Types.ObjectId | null;
}, {
    id: string;
}, {
    strict: false;
}> & Omit<{
    name: string;
    email: string;
    password: string;
    role?: "admin" | "supervisor" | "agent" | "candidate" | null;
    supervisorId?: mongoose.Types.ObjectId | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    strict: false;
}, {
    name: string;
    email: string;
    password: string;
    role?: "admin" | "supervisor" | "agent" | "candidate" | null;
    supervisorId?: mongoose.Types.ObjectId | null;
}, mongoose.Document<unknown, {}, {
    name: string;
    email: string;
    password: string;
    role?: "admin" | "supervisor" | "agent" | "candidate" | null;
    supervisorId?: mongoose.Types.ObjectId | null;
}, {
    id: string;
}, mongoose.ResolveSchemaOptions<{
    strict: false;
}>> & Omit<{
    name: string;
    email: string;
    password: string;
    role?: "admin" | "supervisor" | "agent" | "candidate" | null;
    supervisorId?: mongoose.Types.ObjectId | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    [path: string]: mongoose.SchemaDefinitionProperty<undefined, any, any>;
} | {
    [x: string]: mongoose.SchemaDefinitionProperty<any, any, mongoose.Document<unknown, {}, {
        name: string;
        email: string;
        password: string;
        role?: "admin" | "supervisor" | "agent" | "candidate" | null;
        supervisorId?: mongoose.Types.ObjectId | null;
    }, {
        id: string;
    }, mongoose.ResolveSchemaOptions<{
        strict: false;
    }>> & Omit<{
        name: string;
        email: string;
        password: string;
        role?: "admin" | "supervisor" | "agent" | "candidate" | null;
        supervisorId?: mongoose.Types.ObjectId | null;
    } & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    name: string;
    email: string;
    password: string;
    role?: "admin" | "supervisor" | "agent" | "candidate" | null;
    supervisorId?: mongoose.Types.ObjectId | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    name: string;
    email: string;
    password: string;
    role?: "admin" | "supervisor" | "agent" | "candidate" | null;
    supervisorId?: mongoose.Types.ObjectId | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export declare const Conversation: mongoose.Model<{
    supervisorId?: mongoose.Types.ObjectId | null;
    agentId?: mongoose.Types.ObjectId | null;
    createdAt?: NativeDate | null;
    candidateId?: mongoose.Types.ObjectId | null;
    status?: "open" | "assigned" | "closed" | null;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    supervisorId?: mongoose.Types.ObjectId | null;
    agentId?: mongoose.Types.ObjectId | null;
    createdAt?: NativeDate | null;
    candidateId?: mongoose.Types.ObjectId | null;
    status?: "open" | "assigned" | "closed" | null;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    supervisorId?: mongoose.Types.ObjectId | null;
    agentId?: mongoose.Types.ObjectId | null;
    createdAt?: NativeDate | null;
    candidateId?: mongoose.Types.ObjectId | null;
    status?: "open" | "assigned" | "closed" | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    supervisorId?: mongoose.Types.ObjectId | null;
    agentId?: mongoose.Types.ObjectId | null;
    createdAt?: NativeDate | null;
    candidateId?: mongoose.Types.ObjectId | null;
    status?: "open" | "assigned" | "closed" | null;
}, mongoose.Document<unknown, {}, {
    supervisorId?: mongoose.Types.ObjectId | null;
    agentId?: mongoose.Types.ObjectId | null;
    createdAt?: NativeDate | null;
    candidateId?: mongoose.Types.ObjectId | null;
    status?: "open" | "assigned" | "closed" | null;
}, {
    id: string;
}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<{
    supervisorId?: mongoose.Types.ObjectId | null;
    agentId?: mongoose.Types.ObjectId | null;
    createdAt?: NativeDate | null;
    candidateId?: mongoose.Types.ObjectId | null;
    status?: "open" | "assigned" | "closed" | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    [path: string]: mongoose.SchemaDefinitionProperty<undefined, any, any>;
} | {
    [x: string]: mongoose.SchemaDefinitionProperty<any, any, mongoose.Document<unknown, {}, {
        supervisorId?: mongoose.Types.ObjectId | null;
        agentId?: mongoose.Types.ObjectId | null;
        createdAt?: NativeDate | null;
        candidateId?: mongoose.Types.ObjectId | null;
        status?: "open" | "assigned" | "closed" | null;
    }, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<{
        supervisorId?: mongoose.Types.ObjectId | null;
        agentId?: mongoose.Types.ObjectId | null;
        createdAt?: NativeDate | null;
        candidateId?: mongoose.Types.ObjectId | null;
        status?: "open" | "assigned" | "closed" | null;
    } & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    supervisorId?: mongoose.Types.ObjectId | null;
    agentId?: mongoose.Types.ObjectId | null;
    createdAt?: NativeDate | null;
    candidateId?: mongoose.Types.ObjectId | null;
    status?: "open" | "assigned" | "closed" | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    supervisorId?: mongoose.Types.ObjectId | null;
    agentId?: mongoose.Types.ObjectId | null;
    createdAt?: NativeDate | null;
    candidateId?: mongoose.Types.ObjectId | null;
    status?: "open" | "assigned" | "closed" | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export declare const MessageSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    createdAt?: NativeDate | null;
    senderId?: mongoose.Types.ObjectId | null;
    senderRole?: string | null;
    content?: string | null;
    conversationId?: mongoose.Types.ObjectId | null;
}, mongoose.Document<unknown, {}, {
    createdAt?: NativeDate | null;
    senderId?: mongoose.Types.ObjectId | null;
    senderRole?: string | null;
    content?: string | null;
    conversationId?: mongoose.Types.ObjectId | null;
}, {
    id: string;
}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<{
    createdAt?: NativeDate | null;
    senderId?: mongoose.Types.ObjectId | null;
    senderRole?: string | null;
    content?: string | null;
    conversationId?: mongoose.Types.ObjectId | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    [path: string]: mongoose.SchemaDefinitionProperty<undefined, any, any>;
} | {
    [x: string]: mongoose.SchemaDefinitionProperty<any, any, mongoose.Document<unknown, {}, {
        createdAt?: NativeDate | null;
        senderId?: mongoose.Types.ObjectId | null;
        senderRole?: string | null;
        content?: string | null;
        conversationId?: mongoose.Types.ObjectId | null;
    }, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<{
        createdAt?: NativeDate | null;
        senderId?: mongoose.Types.ObjectId | null;
        senderRole?: string | null;
        content?: string | null;
        conversationId?: mongoose.Types.ObjectId | null;
    } & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    createdAt?: NativeDate | null;
    senderId?: mongoose.Types.ObjectId | null;
    senderRole?: string | null;
    content?: string | null;
    conversationId?: mongoose.Types.ObjectId | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export declare const Message: mongoose.Model<{
    createdAt?: NativeDate | null;
    senderId?: mongoose.Types.ObjectId | null;
    senderRole?: string | null;
    content?: string | null;
    conversationId?: mongoose.Types.ObjectId | null;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    createdAt?: NativeDate | null;
    senderId?: mongoose.Types.ObjectId | null;
    senderRole?: string | null;
    content?: string | null;
    conversationId?: mongoose.Types.ObjectId | null;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    createdAt?: NativeDate | null;
    senderId?: mongoose.Types.ObjectId | null;
    senderRole?: string | null;
    content?: string | null;
    conversationId?: mongoose.Types.ObjectId | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    createdAt?: NativeDate | null;
    senderId?: mongoose.Types.ObjectId | null;
    senderRole?: string | null;
    content?: string | null;
    conversationId?: mongoose.Types.ObjectId | null;
}, mongoose.Document<unknown, {}, {
    createdAt?: NativeDate | null;
    senderId?: mongoose.Types.ObjectId | null;
    senderRole?: string | null;
    content?: string | null;
    conversationId?: mongoose.Types.ObjectId | null;
}, {
    id: string;
}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<{
    createdAt?: NativeDate | null;
    senderId?: mongoose.Types.ObjectId | null;
    senderRole?: string | null;
    content?: string | null;
    conversationId?: mongoose.Types.ObjectId | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    [path: string]: mongoose.SchemaDefinitionProperty<undefined, any, any>;
} | {
    [x: string]: mongoose.SchemaDefinitionProperty<any, any, mongoose.Document<unknown, {}, {
        createdAt?: NativeDate | null;
        senderId?: mongoose.Types.ObjectId | null;
        senderRole?: string | null;
        content?: string | null;
        conversationId?: mongoose.Types.ObjectId | null;
    }, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<{
        createdAt?: NativeDate | null;
        senderId?: mongoose.Types.ObjectId | null;
        senderRole?: string | null;
        content?: string | null;
        conversationId?: mongoose.Types.ObjectId | null;
    } & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    createdAt?: NativeDate | null;
    senderId?: mongoose.Types.ObjectId | null;
    senderRole?: string | null;
    content?: string | null;
    conversationId?: mongoose.Types.ObjectId | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    createdAt?: NativeDate | null;
    senderId?: mongoose.Types.ObjectId | null;
    senderRole?: string | null;
    content?: string | null;
    conversationId?: mongoose.Types.ObjectId | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=Schema.d.ts.map