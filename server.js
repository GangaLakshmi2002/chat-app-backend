import path from 'path';
import { fileURLToPath } from 'url';
import express from "express";
import dotenv from 'dotenv';
// dotenv.config({path: '../.env'});

import cookieParser from 'cookie-parser';
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import userRoutes from "./routes/user.route.js";
import connectToMongoDB from './db/connectToMongoDB.js';
import {app, server} from "./socket/socket.js";
import cors from "cors";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '.env') });

// const __dirname = path.resolve();
const PORT = process.env.PORT || 5000;
app.use(cookieParser());
app.use(cors({
    origin: "https://chat-app-frontend-1-ksl4.onrender.com",
    // origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
  }));

app.use(express.json());// to parse the incoming requests with JSON payloads (from req.body)


app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

// app.use(express.static(path.join(__dirname, "/frontend/dist")));
// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
// });

server.listen(PORT, () => {
    connectToMongoDB();
    console.log("env - ", process.env.PORT)
    console.log(`Server Running on port ${PORT}`)
})

// const app = express();

// app.listen(5000, () => console.log("Server is running on port 5000"));

