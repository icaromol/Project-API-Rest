// Arquivo de tipagem global, disponível para toda a aplicação.

declare namespace Express {
  export interface Request {
    user_id: string;
  }
}
