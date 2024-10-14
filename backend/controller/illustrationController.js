import expressAsyncHandler from "express-async-handler";
import DrawingModel from "../model/drawingModel.js";

const getIllustrations = expressAsyncHandler(async (req, res) => {
  const limit = parseInt(req.query.limit) || 9;
  const index = parseInt(req.query.index) || 0;

  const illustrations = await DrawingModel.find({
    category: "illustrasyonlar",
  })
    .skip(index)
    .limit(limit);

  if (!illustrations) {
    res.status(404);
    throw new Error("Gosterilebilecek illustrasyonlar bulunamadi !");
  }

  res.status(200).json(illustrations);
});

const getIllustration = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;

  const illustration = await DrawingModel.findById(id);

  if (!illustration) {
    res.status(404);
    throw new Error("Is bulunamadi !");
  }

  res.status(200).json(illustration);
});

const deleteIllustration = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;

  const illustration = await DrawingModel.findById(id);

  if (!illustration) {
    res.status(404);
    throw new Error("Illustration bulunamadi ");
  }

  await DrawingModel.findByIdAndDelete(id);

  res.status(200).json("Illustration silindi");
});

const allIllustrations = expressAsyncHandler(async (req, res) => {
  const illustrations = await DrawingModel.find({
    category: "illustrasyonlar",
  });

  if (illustrations.length === 0) {
    res.status(404);
    throw new Error("Gosterilebilecek Illustrasyon bulunamadi !");
  }

  res.status(200).json(illustrations);
});

export {
  getIllustrations,
  getIllustration,
  deleteIllustration,
  allIllustrations,
};
