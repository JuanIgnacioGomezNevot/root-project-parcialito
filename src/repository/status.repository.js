import { JsonHandler } from "../utils/JsonManager.js";

export const StatusRepository = {
	readJsonFile: async (filePath) => {
		const data = await JsonHandler.readFile(filePath);
		if (!data) return null;
		return data;
	},
	downloadCsv: async (url, filePath) => {
		try {
			const response = await fetch(url);
			if (!response.ok) {
				console.error(`Error: ${response.status} ${response.statusText}`);
				throw new Error(
					`Network response was not ok: ${response.status} ${response.statusText}`,
				);
			}
			const data = await response.text();
			await JsonHandler.writeFile(filePath, data);
			return data;
		} catch (error) {
			console.error("Error downloading CSV:", error);
			throw error; 
		}
	},
};
