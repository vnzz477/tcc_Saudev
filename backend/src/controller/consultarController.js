import { Router } from "express";
import { listarConsultasPorUsuario } from "../repository/consultaRepo.js";

const endpoints = Router();

endpoints.get('/consulta/:id', async (req, resp) => {
  try {
    let id = req.params.id;
    let resposta = await listarConsultasPorUsuario(id);
    resp.send(resposta);
  } catch (err) {
    resp.status(400).send({ erro: err.message });
  }
});

export default endpoints;
