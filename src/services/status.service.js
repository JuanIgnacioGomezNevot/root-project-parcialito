import { StatusRepository } from "../repository/status.repository.js";

export const StatusService = {
	readJsonFile: async (filePath) => {
		const data = await StatusRepository.readJsonFile(filePath);
		if (!data) return null;
		return data;
	},
	downloadCsv: async (url, filePath) => {
		const data = await StatusRepository.downloadCsv(url, filePath);
		if (!data) return null;
		return data;
	},
};
