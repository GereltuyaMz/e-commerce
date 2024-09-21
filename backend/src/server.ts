import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db";
import authRouter from "./routes/auht-route";
import cors from "cors";

dotenv.config();

const app = express();
const port = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI as string;

connectDB(MONGO_URI);
app.use(express.json());
app.use(cors());
app.use("/auth", authRouter);

app.get("/", (req: Request, res: Response) => {
	res.send("Hello from Express + TypeScript + ES6!");
});

app.listen(port, () => {
	console.log(`Server running on http://localhost:${port}`);
});
