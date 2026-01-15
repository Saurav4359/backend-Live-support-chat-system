import mongoose from "mongoose";
import { required } from "zod/mini";

const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["admin", "supervisor", "agent", "candidate"],
    },
    supervisorId: {
      type: mongoose.Types.ObjectId,
      ref: "user",
      default: null,
      required: false,
    },
  },
  { strict: false }
);

export const User = mongoose.model("user", UserSchema);

const ConversationSchema = new Schema({
  candidateId: {
    type: mongoose.Types.ObjectId,
    ref: "user",
  },
  agentId: mongoose.Types.ObjectId,
  supervisorId: mongoose.Types.ObjectId,
  status: {
    type: String,
    enum: ["open", "assigned", "closed"],
  },
  createdAt: Date,
});

export const Conversation = mongoose.model("conversation", ConversationSchema);

export const MessageSchema = new Schema({
  conversationId: {
    type: mongoose.Types.ObjectId,
    ref: "conversation",
  },
  senderId: mongoose.Types.ObjectId,
  senderRole: String,
  content: String,
  createdAt: Date,
});

export const Message = mongoose.model("message", MessageSchema);
