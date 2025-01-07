import { Request, Response } from "express";

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
