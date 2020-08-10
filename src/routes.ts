import express from "express";
import ClassesController from "./controllers/ClassesController";
import ConnectionsController from "./controllers/ConnectionsController";

const routes = express.Router();

// Request:
// Request Body: Dados para criação ou atualização de um registro (request.body)
// Route Params: Identificador do qual recurso eu quero atualizar ou deletar (request.params)
// Query Params: Paginação, filtro, ordenação (requeest.query)

const classesControllers = new ClassesController();
const connectionsController = new ConnectionsController();

routes.get("/classes", classesControllers.index);
routes.post("/classes", classesControllers.create);

routes.get("/connections", connectionsController.index);
routes.post("/connections", connectionsController.create);

export default routes;
