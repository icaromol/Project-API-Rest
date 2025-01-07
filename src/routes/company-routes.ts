import { Router } from "express";
import { myMiddleware } from "../middlewares/my-middleware";

const companyRoutes = Router();

// app.use(myMiddleware); // Aplica de forma global. A ordem importa!

companyRoutes.get("/:id", myMiddleware, (request, response) => {
  const {} = request.query;
  const { id } = request.params;
  const { month, year } = request.query;
  response.send(`Empresa ${id} do mês ${month} e ano ${year}`);
});

companyRoutes.post("/", (request, response) => {
  const { briefing, tone_and_voice } = request.body;

  /*   // Devolve a resposta como texto:
  response.send(
    `O briefing é: ${briefing} e o tom de voz da marca ${tone_and_voice}`
  );
  */

  response
    .status(201)
    .json({ briefing, tone_and_voice, user_id: request.user_id });
});

export { companyRoutes };
