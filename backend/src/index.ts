import express, { Application, Request, Response } from "express";
import sequelize from "./infra/sequelize/db/database";
import User from "./domain/user/model/user.model";

const app: Application = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", async (req: Request, res: Response) => {
  try {
    await sequelize.authenticate();
    res.send("Database connection successful");
  } catch (error) {
    res.status(500).send("Unable to connect to the database");
  }
});

app.post("/users", async (req: Request, res: Response) => {
  try {
    const { name, email } = req.body;
    const user = await User.create({ name, email });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).send("Error creating user");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
