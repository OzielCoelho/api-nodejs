import express, { Application, json, urlencoded } from "express";
import { RegisterRoutes } from "./infra/swagger/routes";
import * as swaggerJson from "./infra/swagger/swagger.json";
import * as swaggerUI from "swagger-ui-express";

const app: Application = express();

app.use(
  urlencoded({
    extended: true,
  })
);
app.use(json());

RegisterRoutes(app);

app.use(
  ["/openapi", "/docs", "/swagger"],
  swaggerUI.serve,
  swaggerUI.setup(swaggerJson)
);

export default app;
