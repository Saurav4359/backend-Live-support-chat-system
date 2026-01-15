import * as dotenv from "dotenv";
dotenv.config();

export const MONGO_URL = process.env.MONGO_URL as string;
export const JWT_KEY = process.env.JWT_KEY;
