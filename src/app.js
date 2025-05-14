import express from "express";
import morgan from "morgan";
import { config } from "../config/config.js";
import { libroRouter } from "./routes/libro.route.js";
import { statusRouter } from "./routes/status.route.js";

const app = express();

app.use(
	morgan(":method :url :status :res[content-length] - :response-time ms"),
);

app.use(express.json());

app.use("/api", statusRouter);
app.use("/libros", libroRouter); 

app.listen(config.PORT, () => {
	const message = `❤️  SERVER is UP on http://${config.HOST}:${config.PORT}`;
	console.log(message);
});
