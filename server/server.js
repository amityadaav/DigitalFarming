import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

// Routes
import cropRouter from "./routes/cropRoute.js";
import weatherRouter from "./routes/weatherRoute.js";
import marketRouter from "./routes/marketRoute.js";
import userRouter from "./routes/userRoute.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Database Connection
mongoose
.connect(process.env.MONGO_URI)
.then(() => {
console.log("MongoDB Connected Successfully");
})
.catch((error) => {
console.log("Database Error:", error);
});

// API Routes
app.use("/api/crops", cropRouter);
app.use("/api/weather", weatherRouter);
app.use("/api/market", marketRouter);
app.use("/api/user", userRouter);

// Root Route
app.get("/", (req, res) => {
res.json({
success: true,
message: "Digital Farming API Running Successfully"
});
});

// Start Server
app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);
});
