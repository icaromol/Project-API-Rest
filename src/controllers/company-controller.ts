import { Request, Response } from "express";
import { AppError } from "../utils/appError";

export class CompanyController {
  index(request: Request, response: Response) {
    const {} = request.query;
    const { id } = request.params;
    const { month, year } = request.query;
    response.send(`Empresa ${id} do mês ${month} e ano ${year}`);
  }

  create(request: Request, response: Response) {
    const { briefing, tone_and_voice } = request.body;
    const { id } = request.params;

    // TRATAMENTO DE REQUISIÇÕES COM ERRO:

    if (!briefing) {
      throw new AppError("Briefing é obrigatório", 400);
    } else if (!tone_and_voice) {
      throw new AppError("Tom de voz de marca é obrigatório", 400);
    }

    response
      .status(201)
      .json({ briefing, tone_and_voice, user_id: request.user_id });
  }
}

/**
 * MÉTODOS DE CONTROLLER
 * index - GET para listar vários registros.
 * show - GET para exibir um registro específico.
 * create - POST para criar um registro.
 * update - PUT para atualizar um registro.
 * remove - DELETE para deletar um registro
 */
