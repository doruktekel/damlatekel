import expressAsyncHandler from "express-async-handler";
import DrawingModel from "../model/drawingModel.js";

const getEskizs = expressAsyncHandler(async (req, res) => {
  const index = parseInt(req.query.index) || 0;
  const limit = parseInt(req.query.limit) || 9;

  const eskizs = await DrawingModel.find({ category: "eskizler" })
    .skip(index)
    .limit(limit)
    .sort({ createdAt: -1 });

  if (eskizs.length === 0) {
    res.status(404);
    throw new Error("Gosterilebilecek eskizler bulunamadi !");
  }

  res.status(200).json(eskizs);
});

const getEskiz = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;

  const eskiz = await DrawingModel.findById(id);

  if (!eskiz) {
    res.status(404);
    throw new Error("Is bulunamadi!");
  }

  res.status(200).json(eskiz);
});

const deleteEskiz = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;

  const eskiz = await DrawingModel.findById(id);
  if (!eskiz) {
    res.status(404);
    throw new Error("Eskiz bulunamadi");
  }

  await DrawingModel.findByIdAndDelete(id);

  res.status(200).json("Eskiz silindi");
});

const allEskizs = expressAsyncHandler(async (req, res) => {
  const eskizs = await DrawingModel.find({ category: "eskizler" }).sort({
    createdAt: -1,
  });

  if (eskizs.length === 0) {
    res.status(404);
    throw new Error("Gosterilebilecek eskiz bulunamadi !");
  }

  res.status(200).json(eskizs);
});

export { getEskizs, getEskiz, deleteEskiz, allEskizs };
