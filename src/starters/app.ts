import "express-async-errors";
import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";

const app = express();
app.use(morgan("tiny"));
app.use(cors());
app.use(helmet());
app.use(express.json());

//
// ROUTES
//

import scrapperRouter from "../routes/scrapperRoutes";

app.use("/scrappe/", scrapperRouter);

app.use((req: Request, res: Response, next: NextFunction) =>
  res.status(200).send(`It's all running ok`)
);
app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).send(error.message);
});

export default app;
