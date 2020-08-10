import { Request, Response } from "express";
import db from "../database/connection";

class ConnectionsController {
  async index(request: Request, response: Response) {

    const totalConnections = await db("connections").count('* AS total');
    const {total} = totalConnections[0];
    return response.status(201).json({total});

  }

  async create(request: Request, response: Response) {
    const { user_id } = request.body;

    try {
      await db("connections").insert({
        user_id,
      });

      response.status(200).send();
    } catch (error) {
      response.status(400).json({
        error: "Unexpected error while creating new connection",
      });
    }
  }
}

export default ConnectionsController;
