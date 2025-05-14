import path from "node:path";
import { StatusService } from "../services/status.service.js";

export const StatusController = {
	readJsonFile: async (req, res) => {
		// traer el db/book.json
		const books = path.resolve("src", "db", "books.json");

		try {
			const data = await StatusService.readJsonFile(books);
			res.status(200).json({
				payload: data,
				message: "Archivo JSON leído correctamente",
				ok: true, 
			});
		} catch (error) {
			console.error("Error al leer el archivo JSON:", error);
			res.status(500).json({
				payload: null,
				message: "Error al leer el archivo JSON",
				ok: false,
			});
		}
	},

	downloadCsv: async (req, res) => {
		const { csvUrl } = req.query;
		const decodedUrl = decodeURIComponent(csvUrl);
		//const csvUrl = "https://raw.githubusercontent.com/plotly/datasets/refs/heads/master/beers.csv";
		//  decidi pasarle a url en el mismo endpoint
		const csvFilePath = path.resolve("src", "db", "beers.csv");

		try {
			await StatusService.downloadCsv(decodedUrl, csvFilePath);
			res.status(200).json({
				payload: null,
				message: "Archivo CSV descargado y guardado correctamente",
				ok: true,
			});
		} catch (error) {
			console.error("Error al descargar o guardar el archivo CSV:", error);
			res.status(500).json({
				payload: null,
				message: "Error al descargar o guardar el archivo CSV",
				ok: false,
			});
		}
	},
};
