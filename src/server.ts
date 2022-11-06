import express, { NextFunction, Request, Response } from "express";
import { AppError } from "./AppErros";
import { router } from "./routes";

import "./database";

const app = express();
const port = 3333;

app.use(express.json());
app.use("/v1", router);

app.use(
    (err: Error, request: Request, response: Response, next: NextFunction) => {
        if (err instanceof AppError) {
            return response.status(err.statusCode).json({
                message: err.message,
            });
        }
        return response.status(500).json({
            status: "error",
            message: `Internal server error - ${err.message}`,
        });
    }
);

app.listen(port, () => {
    console.log("O servidor está rodando na porta", port);
});