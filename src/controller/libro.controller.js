import { LibroService } from "../services/libro.service.js";

export const LibroController = {
	libroValidation: async (req, res) => {
		const { id } = req.params;

		const libro = await LibroService.serviceLibroValidation(id);

		if (!libro) {
			return res.status(404).json({
				payload: null,
				message: "Libro no encontrado",
				ok: false,
			});
			return;
		}

		res.status(200).json({
			payload: { ...libro }, 
			message: "Libro encontrado",
			ok: true,
		}); 
		return;
	},

	libroCreateOne: async (req, res) => {
		const { libro } = req.body;
		try {
			const libroResponse = await LibroService.serviceLibroCreation(libro);
			res.status(200).json({
				payload: { ...libroResponse },
				message: "Se ha creado el libro",
				ok: true,
			});
			return;
		} catch (e) {
			console.log({ message: e.message, message: "algo salio mal" });
			res.status(404).json({
				payload: null,
				message: "No se pudo crear el libro",
				ok: false,
			});
			return;
		}
	},

	libroDeleteOne: async (req, res) => {
		const { id } = req.params;

		const idLibro = await LibroService.serviceLibroDelete(id);

		if (!idLibro) {
			res.status(404).json({
				payload: null,
				message: "No se pudo eliminar el libro",
				ok: false,
			});
			return;
		}

		if (idLibro === id) {
			res.status(200).json({
				payload: { idLibro },
				message: "Libro eliminado",
				ok: true,
			});
			return;
		}
	},

	libroUpdateByid: async (req, res) => {
		const { id, semanasPlus } = req.body;
		console.log(id, semanasPlus);

		const librosUpdated = await LibroService.serviceUpdateLibro(
			id,
			semanasPlus,
		);

		if (!librosUpdated) {
			res.status(404).json({
				payload: null,
				message: "No se pudo actualizar nada",
				ok: false,
			});
			return;
		}

		const newUpdatedLibros = librosUpdated.map((libro) => ({
			id: libro.id,
			newExpDate: libro.expDate,
		}));

		res.status(200).json({
			message: "Libro modificado",
			payload: newUpdatedLibros,
			ok: true,
		});
		return;
	},
};
