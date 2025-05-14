import { Libro } from "../models/libro.js";
import { LibroRepository } from "../repository/libro.repository.js";

export const LibroService = {
	serviceLibroValidation: (id) => {
		const libro = LibroRepository.getById(id);

		if (!libro) return null;

		return libro;
	},
 
	serviceLibroCreation: (libro) => {
		const dataLibro = {
			...libro,
			id: crypto.randomUUID().toString(), 
		};

		const modelsLibro = new Libro(
			dataLibro.id,
			dataLibro.title,
			dataLibro.author,
			dataLibro.isbn,
			dataLibro.publishedDate,
			dataLibro.availableCopies,
		);

		LibroRepository.createOne(modelsLibro);

		return modelsLibro;
	},

	serviceLibroDelete: (id) => {
		const idLibro = LibroRepository.deleteById(id);

		if (!idLibro) return null;

		return idLibro;
	},

	serviceUpdateLibro: (id, semanasPlus) => {
		const libros = LibroRepository.updateById(id, semanasPlus);
		if (!libros) return null;

		return libros;
	},
};
