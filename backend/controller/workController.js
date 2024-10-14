import expressAsyncHandler from "express-async-handler";
import DrawingModel from "../model/drawingModel.js";
import { error } from "console";

const createWork = expressAsyncHandler(async (req, res) => {
  const { title, description, imageUrl, category, user } = req.body;

  if (!title || !imageUrl || !category || !user) {
    res.status(400);
    throw new Error("Lutfen zorunlu alanlari doldurunuz !");
  }

  const newDraw = await DrawingModel.create(req.body);
  res.status(201).json(newDraw);
});
const getWorks = expressAsyncHandler(async (req, res) => {
  const works = await DrawingModel.find({});

  if (!works) {
    res.status(404);
    throw new Error("Gosterilebilecek isler bulunamadi");
  }
  res.status(200).json(works);
});

const editWork = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;
  const { title, category } = req.body;

  if (!id) {
    res.status(404);
    throw new Error("Kayitli is bulunamadi");
  }

  if (!title || !category) {
    res.status(400);
    throw new Error("Baslik ve category doldurulmasi zorunlu alanlardir !");
  }

  const editedWork = await DrawingModel.findByIdAndUpdate(id, req.body);

  res.status(200).json(editedWork);
});

export { createWork, getWorks, editWork };
