import expressAsyncHandler from "express-async-handler";
import DrawingModel from "../model/drawingModel.js";

const getCards = expressAsyncHandler(async (req, res) => {
  const limit = parseInt(req.query.limit) || 9;
  const index = parseInt(req.query.index) || 0;

  const cards = await DrawingModel.find({ category: "kartlar&afisler" })
    .skip(index)
    .limit(limit);

  if (!cards) {
    res.status(404);
    throw new Error("Gosterilebilecek Kart ve Afisler bulunamadi !");
  }

  res.status(200).json(cards);
});

const getCard = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;

  const card = await DrawingModel.findById(id);

  if (!card) {
    res.status(404);
    throw new Error("Kart bulunamadi!");
  }

  res.status(200).json(card);
});

const deleteCard = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;

  const card = await DrawingModel.findById(id);
  if (!card) {
    res.status(404);
    throw new Error("Kart bulunamadi");
  }

  await DrawingModel.findByIdAndDelete(id);

  res.status(200).json("Kart silindi");
});

const allCards = expressAsyncHandler(async (req, res) => {
  const cards = await DrawingModel.find({ category: "kartlar&afisler" });

  if (cards.length === 0) {
    res.status(404);
    throw new Error("Gosterilebilecek Kart ve Afisler bulunamadi !");
  }

  res.status(200).json(cards);
});

export { getCards, getCard, deleteCard, allCards };
