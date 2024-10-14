import express from "express";
import {
  allEskizs,
  deleteEskiz,
  getEskiz,
  getEskizs,
} from "../controller/eskizController.js";
import verifyMiddleware from "../middlewares/verifyMiddleware.js";

const router = express.Router();

router.get("/", getEskizs);
router.get("/all-eskizs", verifyMiddleware, allEskizs);

router.get("/:id", getEskiz);
router.delete("/:id", verifyMiddleware, deleteEskiz);

export default router;
