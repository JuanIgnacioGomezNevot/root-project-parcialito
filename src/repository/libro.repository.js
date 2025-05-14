import { JsonHandler } from "../utils/JsonManager.js";

export const LibroRepository = {
	getById: async (id) => {
		const libros = await JsonHandler.read();

		if (!libros) return null;

		const libro = libros.find((libro) => libro.id === id);

		if (!libro) return null;
		return libro;
	},

	createOne: async (libro) => {
		const libros = await JsonHandler.read();
		libros.push(libro);
		try {
			await JsonHandler.write(libros);
		} catch (e) { 
			console.error({ message: e.message });
		} 
	},

	deleteById: async (id) => {
		const libros = await JsonHandler.read();

		if (!libros) return null;

		const index = libros.find((libro) => libro.id === id);

		if (!index) return;

		const librosResponse = libros.filter((libro) => libro.id !== id);

		try {
			await JsonHandler.write(librosResponse);
			return id;
		} catch (e) {
			return null;
		}
	},

	updateById: async (id, semanasPlus) => {
		const libros = await JsonHandler.read();
		const librosResponse = libros.filter((libro) => libro.id === id);
		const librosOld = libros.filter((libro) => libro.id !== id);
		const newExpDate = new Date(
			new Date().getDate() + 7 * 24 * 60 * 60 * 1000 * semanasPlus,
		);
		const modifiedLibros = librosResponse.map((libro) => ({
			...libro,
			expDate: newExpDate,
		}));
		try {
			await JsonHandler.write([...librosOld, ...modifiedLibros]);
			return modifiedLibros;
		} catch (e) {
			return null;
		}
	},

	getAll: async () => await JsonHandler.read(),
};
