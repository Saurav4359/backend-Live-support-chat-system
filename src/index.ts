 
import express from "express";


const app = express();

app.use(express.json());

app.post("auth/signup", async (req, res) => {});

app.post("auth/login", async (req, res) => {});

app.get("/auth/me", async (req, res) => {});

app.post("/conversations", async (req, res) => {});

app.post("/conversations/:id/assign", async (req, res) => {});

app.get("/conversations/:id", async (req, res) => {});

app.post("/conversations/:id/close", async (req, res) => {});

app.get("/admin/analytics", (req, res) => {});


app.listen()