import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { ENV } from './src/lib/env.js';
import { connectDB } from './src/lib/db.js';

import sessionRoutes from "./src/routes/sessionRoutes.js";
import chatRoutes from "./src/routes/chatRoutes.js";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(
    cors({
        origin: ["http://localhost:5173", "http://localhost:5174"],
        credentials: true,
    })
);
console.log(ENV.PORT)
console.log(ENV.DB_URL)


app.get("/", (req, res) => {
    res.status(200).json({
        message: "success"
    })

})

// API Routes
app.use("/api/sessions", sessionRoutes);
app.use("/api/chat", chatRoutes);

// Database connection for serverless environments
connectDB();

// Only start the server if this file is run directly
const isMainModule = import.meta.url === `file://${process.argv[1]}` || process.argv[1]?.endsWith('server.js');

if (isMainModule) {
    app.listen(ENV.PORT || 5001, () => {
        console.log(`server is running on port ${ENV.PORT || 5001}`);
    });
}

export default app;