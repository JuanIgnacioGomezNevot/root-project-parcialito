import fs from "node:fs/promises";
import { config } from "../../config/config.js";
import { readFile, writeFile } from "node:fs";

const { DB_PATH } = config;

export const JsonHandler = {
	async read() {
		try {
			const data = await fs.readFile(DB_PATH, { encoding: "utf8" });
			return JSON.parse(data || []);
		} catch (error) {
			(error) => console.log({ error });
		}
	},

	async write(data) {
		try {
			const strData = JSON.stringify(data, null, 2);
			await fs.writeFile(DB_PATH, strData, { encoding: "utf8" });
		} catch (error) {
			console.log({ error });
		}
	},
	async readFile(filePath) {
		try {
			const data = await fs.readFile(filePath, { encoding: "utf8" });
			return JSON.parse(data || []);
		} catch (error) {
			console.error("Error al leer el archivo JSON:", error);
			throw error;
		} 
	},

	async writeFile(filePath, data) {
		try {
			const strData = JSON.stringify(data, null, 2);
			await fs.writeFile(filePath, strData, { encoding: "utf8" });
		} catch (error) {
			console.error("Error al escribir el archivo JSON:", error);
			throw error;
		}
	},
};
