import { Router } from "express";
import { LibroController } from "../controller/libro.controller.js";

const libroRouter = Router();

libroRouter.get("/libro-valid/:id", LibroController.libroValidation);
libroRouter.post("/libro-create", LibroController.libroCreateOne);
libroRouter.put("/libro-put", LibroController.libroUpdateByid);
libroRouter.delete("/libro-delete/:id", LibroController.libroDeleteOne);

export { libroRouter }; 
