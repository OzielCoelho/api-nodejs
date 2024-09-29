import express, { Application } from "express";
import userRouter from "./application/user/user.route";

const app: Application = express();
app.use(express.json());

app.use("/users", userRouter);

export default app;
