import path from "path";
import express, { urlencoded } from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRouter from "./router/authRouter.js";
import errorMiddleware from "./middlewares/errorMiddleware.js";
import databaseConnection from "./config/db.js";
import workRouter from "./router/workRouter.js";
import categoryRouter from "./router/categoryRouter.js";
import cardRouter from "./router/cardRouter.js";
import illustrationRouter from "./router/illustrationRouter.js";
import eskizRouter from "./router/eskizRouter.js";
import mailRouter from "./router/mailRouter.js";

const app = express();
const __dirname = path.resolve();

dotenv.config();

app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/category", categoryRouter);
app.use("/api/work", workRouter);
app.use("/api/work/cards", cardRouter);
app.use("/api/work/illustrations", illustrationRouter);
app.use("/api/work/eskizs", eskizRouter);
app.use("/api/mail", mailRouter);

app.use(express.static(path.join(__dirname, "/frontend/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

app.get("/", (req, res) => {
  res.json("Welcome");
});

app.use(errorMiddleware);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Damla portfolio listening ${PORT}`);
  databaseConnection();
});
