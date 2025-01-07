import express from "express";
import { myMiddleware } from "./middlewares/my-middleware";

const PORT = 3333;

const app = express();
app.use(express.json());

// app.use(myMiddleware); // Aplica de forma global. A ordem importa!

app.get("/empresa/:id/calendario", myMiddleware, (request, response) => {
  const {} = request.query;
  const { id } = request.params;
  const { month, year } = request.query;
  response.send(`Empresa ${id} do mês ${month} e ano ${year}`);
});

app.post("/empresa/:id/calendario", (request, response) => {
  const { briefing, tone_and_voice } = request.body;

  /*   // Devolve a resposta como texto:
  response.send(
    `O briefing é: ${briefing} e o tom de voz da marca ${tone_and_voice}`
  );
  */

  response.status(201).json({ briefing, tone_and_voice });
});

app.listen(PORT, () =>
  console.log(
    `Server está sendo executado na porta ${PORT} | Server is already running on port ${PORT}`
  )
);

/* Para paginação, usamos parâmetros nomeados (query params):

/id?page=2&limit=10

*/
