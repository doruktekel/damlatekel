import express from "express";

import { createBio, getBio, updateBio } from "../controller/bioController.js";
import verifyMiddleware from "../middlewares/verifyMiddleware.js";

const router = express.Router();

router.get("/", getBio);
router.post("/", verifyMiddleware, createBio);
router.put("/", verifyMiddleware, updateBio);

export default router;
