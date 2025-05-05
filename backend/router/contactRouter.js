import express from "express";

import verifyMiddleware from "../middlewares/verifyMiddleware.js";
import {
  createContact,
  getContact,
  updateContact,
} from "../controller/contactController.js";

const router = express.Router();

router.get("/", getContact);
router.post("/", verifyMiddleware, createContact);
router.put("/", verifyMiddleware, updateContact);

export default router;
