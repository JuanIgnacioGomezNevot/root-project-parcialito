import { Router } from "express";
import { StatusController } from "../controller/status.controller.js";

const statusRouter = Router();

statusRouter.get("/v01/status", (req, res) => {
	res.json({
		status: 200,
		timestatus: new Date().toISOString(),
		message: "Bienvenidos a la API de libros",
	});
});

statusRouter.get("/v02/status", (req, res) => {
	res.json({
		status: 200,
		timestatus: new Date().toISOString(),
		message: "Bienvenidos a la API de libros",
		location: "Argentina", 
	});
});

// 1. Endpoint que lee desde un archivo .json
// Ruta: GET /api/json_file
// Acción: Lee y devuelve los datos de un archivo .json ubicado en src/db/.
// Ejemplo: GET /api/json_file → retorna la lista completa de libros desde books.json.

statusRouter.get("/json_file", StatusController.readJsonFile);

// 2. Endpoint que consume una API externa y guarda un archivo .csv
// Ruta: GET /api/data_externa
// Acción: Descarga datos desde una URL pública y los guarda como CSV en la carpeta src/db/.
// Servicio sugerido:

// const csv_url = "https://raw.githubusercontent.com/plotly/datasets/refs/heads/master/beers.csv";

statusRouter.get("/data_externa", StatusController.downloadCsv);

export { statusRouter };
