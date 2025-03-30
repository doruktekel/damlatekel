import express from "express";
import { rateLimit } from "express-rate-limit";
import sendMail from "../controller/mailController.js";

const router = express.Router();
const limiter = rateLimit({
  windowMs: 30 * 60 * 1000,
  limit: 3,
  message:
    "Çok fazla istek gönderildi, lütfen bir süre sonra tekrar deneyiniz !",
});

router.post("/", limiter, sendMail);

export default router;
