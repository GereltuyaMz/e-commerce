import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db";
import authRouter from "./routes/auth-route";
import productRouter from "./routes/product-router";
import categoryRouter from "./routes/category-route";
import cartRouter from "./routes/cart-route";
// import nodemailer from "nodemailer";

dotenv.config();

const app = express();
const port = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI as string;

connectDB(MONGO_URI);
app.use(express.json());
app.use(cors());
app.use("/auth", authRouter);
app.use("/product", productRouter);
app.use("/category", categoryRouter);
app.use("/cart", cartRouter);

// const transport = nodemailer.createTransport({
//   service: "gmail",
//   host: "smtp.gmail.com",
//   port: 587,
//   secure: false,
//   auth: {
//     user: "gegiimz96@gmail.com",
//     pass: "igpgkbxrgztvzqdj",
//   },
// });

// const email = transport.sendMail({
//   from: "gegiimz96@gmail.com",
//   to: "shangela96@gmail.com",
//   subject: "Verify",
//   text: "Hello world",
//   html: "Hi",
// });
// console.log("email", email);
app.get("/", (req, res) => res.send("Service is live!!"));

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
