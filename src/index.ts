import express from "express";
import mongoose from "mongoose";
import { MONGO_URL } from "./lib/config.js";
import { User } from "./models/Schema.js";
import { Signup } from "./util/Validation.js";

const app = express();

app.use(express.json());

app.post("/auth/signup", async (req, res) => {
  const { success, data } = Signup.safeParse(req.body);
  try {
    if (!success)
      return res.json({
        success: false,
        message: "Data Invalid",
      });
    if (data.role === "agent" && !data.supervisorId) {
      res.status(404).json({
        success: false,
        error: "Supervisor id not found ",
      });
    }

    const user = await User.create({
      name: data.name,
      email: data.email,
      password: data.password,
      role: data.role,
      ...(data.supervisorId && {
        supervisorId: new mongoose.Types.ObjectId(data.supervisorId),
      }),
    });

    res.status(200).json({
      success: true,
      data: {
        id: user._id,
        name: data.name,
        email: data.email,
        role: data.role,
      },
    });
  } catch (e) {
    console.log("error ");
    res.send("eror");
  }
});

app.post("auth/login", async (req, res) => {});

app.get("/auth/me", async (req, res) => {});

app.post("/conversations", async (req, res) => {});

app.post("/conversations/:id/assign", async (req, res) => {});

app.get("/conversations/:id", async (req, res) => {});

app.post("/conversations/:id/close", async (req, res) => {});

app.get("/admin/analytics", (req, res) => {});

async function Server() {
  try {
    await mongoose.connect(MONGO_URL);

    app.listen(3000, () => {
      console.log("Server has restarted");
    });
  } catch (e) {
    console.log("error while connecting Server / Db");
  }
}
Server();
