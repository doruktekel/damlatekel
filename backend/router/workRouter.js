import express from "express";
import {
  createWork,
  editWork,
  getWorks,
} from "../controller/workController.js";
import verifyMiddleware from "../middlewares/verifyMiddleware.js";

const router = express.Router();

router.post("/create", verifyMiddleware, createWork);
router.get("/", verifyMiddleware, getWorks);
router.put("/:id", verifyMiddleware, editWork);

export default router;
