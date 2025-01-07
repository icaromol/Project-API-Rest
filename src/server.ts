import express from "express";
import { routes } from "./routes";

const PORT = 3333;

const app = express();
app.use(express.json());

app.use(routes);

app.listen(PORT, () =>
  console.log(
    `Server está sendo executado na porta ${PORT} | Server is already running on port ${PORT}`
  )
);

/* Para paginação, usamos parâmetros nomeados (query params):

/id?page=2&limit=10

*/
