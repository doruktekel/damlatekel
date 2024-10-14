import express from "express";
import {
  allCards,
  deleteCard,
  getCard,
  getCards,
} from "../controller/cardController.js";
import verifyMiddleware from "../middlewares/verifyMiddleware.js";

const router = express.Router();

router.get("/", getCards);
router.get("/all-cards", verifyMiddleware, allCards);

router.get("/:id", getCard);
router.delete("/:id", verifyMiddleware, deleteCard);

export default router;
