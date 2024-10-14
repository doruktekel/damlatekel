import express from "express";
import {
  allIllustrations,
  deleteIllustration,
  getIllustration,
  getIllustrations,
} from "../controller/illustrationController.js";
import verifyMiddleware from "../middlewares/verifyMiddleware.js";

const router = express.Router();

router.get("/", getIllustrations);
router.get("/all-illustrations", verifyMiddleware, allIllustrations);

router.get("/:id", getIllustration);
router.delete("/:id", verifyMiddleware, deleteIllustration);

export default router;
