import express, { Request, Response, NextFunction } from "express";
import { routes } from "./routes";
import { AppError } from "./utils/appError";

const PORT = 3333;

const app = express();
app.use(express.json());

app.use(routes);

// Tratamento de exceções e erros.
app.use((error: any, request: Request, response: Response, _: NextFunction) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({ message: error.message });
  }
  response.status(500).json({ message: error.message });
});

app.listen(PORT, () =>
  console.log(
    `Servidor está sendo executado na porta ${PORT} | Server is already running on port ${PORT}`
  )
);

/**
 * Para paginação, usamos parâmetros nomeados (query params):
 * id?page=2&limit=10
 */

/**
 * TIPOS DE ERROS
 * 400 (Bad Request): Erro do cliente.
 * 500 (Internal Server Error): Erro interno do servidor.
 */
