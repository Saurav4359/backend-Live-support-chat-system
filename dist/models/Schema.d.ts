import mongoose from "mongoose";
export declare const User: mongoose.Model<{
    name: string;
    email: string;
    password: string;
    role?: "admin" | "supervisor" | "agent" | "candidate" | null;
    supervisorId?: any;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    name: string;
    email: string;
    password: string;
    role?: "admin" | "supervisor" | "agent" | "candidate" | null;
    supervisorId?: any;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    name: string;
    email: string;
    password: string;
    role?: "admin" | "supervisor" | "agent" | "candidate" | null;
    supervisorId?: any;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    name: string;
    email: string;
    password: string;
    role?: "admin" | "supervisor" | "agent" | "candidate" | null;
    supervisorId?: any;
}, mongoose.Document<unknown, {}, {
    name: string;
    email: string;
    password: string;
    role?: "admin" | "supervisor" | "agent" | "candidate" | null;
    supervisorId?: any;
}, {
    id: string;
}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<{
    name: string;
    email: string;
    password: string;
    role?: "admin" | "supervisor" | "agent" | "candidate" | null;
    supervisorId?: any;
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
        supervisorId?: any;
    }, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<{
        name: string;
        email: string;
        password: string;
        role?: "admin" | "supervisor" | "agent" | "candidate" | null;
        supervisorId?: any;
    } & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, mongoose.FlattenMaps<{
    name: string;
    email: string;
    password: string;
    role?: "admin" | "supervisor" | "agent" | "candidate" | null;
    supervisorId?: any;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, mongoose.FlattenMaps<{
    name: string;
    email: string;
    password: string;
    role?: "admin" | "supervisor" | "agent" | "candidate" | null;
    supervisorId?: any;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export declare const Conversation: mongoose.Model<{
    supervisorId?: any;
    createdAt?: NativeDate | null;
    candidateId?: any;
    agentId?: any;
    status?: "open" | "assigned" | "closed" | null;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    supervisorId?: any;
    createdAt?: NativeDate | null;
    candidateId?: any;
    agentId?: any;
    status?: "open" | "assigned" | "closed" | null;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    supervisorId?: any;
    createdAt?: NativeDate | null;
    candidateId?: any;
    agentId?: any;
    status?: "open" | "assigned" | "closed" | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    supervisorId?: any;
    createdAt?: NativeDate | null;
    candidateId?: any;
    agentId?: any;
    status?: "open" | "assigned" | "closed" | null;
}, mongoose.Document<unknown, {}, {
    supervisorId?: any;
    createdAt?: NativeDate | null;
    candidateId?: any;
    agentId?: any;
    status?: "open" | "assigned" | "closed" | null;
}, {
    id: string;
}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<{
    supervisorId?: any;
    createdAt?: NativeDate | null;
    candidateId?: any;
    agentId?: any;
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
        supervisorId?: any;
        createdAt?: NativeDate | null;
        candidateId?: any;
        agentId?: any;
        status?: "open" | "assigned" | "closed" | null;
    }, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<{
        supervisorId?: any;
        createdAt?: NativeDate | null;
        candidateId?: any;
        agentId?: any;
        status?: "open" | "assigned" | "closed" | null;
    } & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, mongoose.FlattenMaps<{
    supervisorId?: any;
    createdAt?: NativeDate | null;
    candidateId?: any;
    agentId?: any;
    status?: "open" | "assigned" | "closed" | null;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, mongoose.FlattenMaps<{
    supervisorId?: any;
    createdAt?: NativeDate | null;
    candidateId?: any;
    agentId?: any;
    status?: "open" | "assigned" | "closed" | null;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export declare const MessageSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    createdAt?: NativeDate | null;
    conversationId?: any;
    senderId?: any;
    senderRole?: string | null;
    content?: string | null;
}, mongoose.Document<unknown, {}, {
    createdAt?: NativeDate | null;
    conversationId?: any;
    senderId?: any;
    senderRole?: string | null;
    content?: string | null;
}, {
    id: string;
}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<{
    createdAt?: NativeDate | null;
    conversationId?: any;
    senderId?: any;
    senderRole?: string | null;
    content?: string | null;
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
        conversationId?: any;
        senderId?: any;
        senderRole?: string | null;
        content?: string | null;
    }, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<{
        createdAt?: NativeDate | null;
        conversationId?: any;
        senderId?: any;
        senderRole?: string | null;
        content?: string | null;
    } & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, mongoose.FlattenMaps<{
    createdAt?: NativeDate | null;
    conversationId?: any;
    senderId?: any;
    senderRole?: string | null;
    content?: string | null;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export declare const Message: mongoose.Model<{
    createdAt?: NativeDate | null;
    conversationId?: any;
    senderId?: any;
    senderRole?: string | null;
    content?: string | null;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    createdAt?: NativeDate | null;
    conversationId?: any;
    senderId?: any;
    senderRole?: string | null;
    content?: string | null;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    createdAt?: NativeDate | null;
    conversationId?: any;
    senderId?: any;
    senderRole?: string | null;
    content?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    createdAt?: NativeDate | null;
    conversationId?: any;
    senderId?: any;
    senderRole?: string | null;
    content?: string | null;
}, mongoose.Document<unknown, {}, {
    createdAt?: NativeDate | null;
    conversationId?: any;
    senderId?: any;
    senderRole?: string | null;
    content?: string | null;
}, {
    id: string;
}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<{
    createdAt?: NativeDate | null;
    conversationId?: any;
    senderId?: any;
    senderRole?: string | null;
    content?: string | null;
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
        conversationId?: any;
        senderId?: any;
        senderRole?: string | null;
        content?: string | null;
    }, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<{
        createdAt?: NativeDate | null;
        conversationId?: any;
        senderId?: any;
        senderRole?: string | null;
        content?: string | null;
    } & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, mongoose.FlattenMaps<{
    createdAt?: NativeDate | null;
    conversationId?: any;
    senderId?: any;
    senderRole?: string | null;
    content?: string | null;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, mongoose.FlattenMaps<{
    createdAt?: NativeDate | null;
    conversationId?: any;
    senderId?: any;
    senderRole?: string | null;
    content?: string | null;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=Schema.d.ts.map