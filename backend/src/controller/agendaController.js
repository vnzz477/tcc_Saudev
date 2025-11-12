import { Router } from "express";
import { inserirConsulta } from "../repository/agendaRepo.js";

const endpoints = Router();


endpoints.post('/consulta', async (req, resp) => {
  try {
    let consulta = req.body;
    let id = await inserirConsulta(consulta);
    resp.send({ novoId: id });
  } catch (err) {
    resp.status(400).send({ erro: err.message });
  }
});

export default endpoints;
