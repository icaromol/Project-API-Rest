import express from "express";

const PORT = 3333;

const app = express();

app.get("/company/:id", (request, response) => {
  const { id } = request.params;
  response.send(`Empresa ${id}`);
});

app.listen(PORT, () =>
  console.log(
    `Server está sendo executado na porta ${PORT} | Server is already running on port ${PORT}`
  )
);
