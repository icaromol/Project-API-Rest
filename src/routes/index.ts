// Arquivo onde estão todas as rotas.

import { Router } from "express";

import { companyRoutes } from "./company-routes";

const routes = Router();

// Rotas da empresa.
routes.use("/empresa", companyRoutes);

export { routes };
