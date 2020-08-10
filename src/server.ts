import express from "express";
import cors from "cors";
import routes from "./routes";

const app = express();

// Cors
app.use(cors());

// Habilitando JSON
app.use(express.json());

// Rotas
app.use(routes);

app.listen(3333);
