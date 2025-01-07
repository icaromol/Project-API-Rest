import express from "express";

const PORT = 3333;

const app = express();

app.get("/empresa/:id/calendario", (request, response) => {
  const {} = request.query;
  const { id } = request.params;
  const { month, year } = request.query;
  response.send(`Empresa ${id} do mês ${month} e ano ${year}`);
});

app.listen(PORT, () =>
  console.log(
    `Server está sendo executado na porta ${PORT} | Server is already running on port ${PORT}`
  )
);

/* Para paginação, usamos parâmetros nomeados (query params):

/id?page=2&limit=10

*/
