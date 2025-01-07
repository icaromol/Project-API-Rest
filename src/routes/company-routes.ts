import { Router } from "express";
import { myMiddleware } from "../middlewares/my-middleware";
import { CompanyController } from "../controllers/companyController";

const companyRoutes = Router();
const companyController = new CompanyController();

companyRoutes.use(myMiddleware); // Aplica de forma global. A ordem importa!

companyRoutes.get("/:id", companyController.index);

companyRoutes.post("/:id", companyController.create);

export { companyRoutes };
