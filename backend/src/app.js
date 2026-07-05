import express from 'express';
import cors from 'cors'
import './config/env.js';
import chatRoutes from './routes/chat.routes.js';

const app = express();

const allowedOrigins = (process.env.CORS_ORIGIN || "http://localhost:5173")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

app.use(cors({
    origin: allowedOrigins,
    credentials : true
}));
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true, limit: "1mb" }));

app.get("/health", (req, res) => {
    res.status(200).json({
        success: true,
        message: "ok"
    });
});

app.use("/chat", chatRoutes);

app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found"
    });
});

export default app;

