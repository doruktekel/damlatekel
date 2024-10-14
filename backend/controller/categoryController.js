import expressAsyncHandler from "express-async-handler";

const getAllCategories = expressAsyncHandler(async (req, res) => {
  const categories = ["Illustrasyonlar", "Kartlar&afisler", "Eskizler"];

  res.status(200).json(categories);
});

export default getAllCategories;
