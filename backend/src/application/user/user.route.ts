import { Router, Request, Response } from "express";
import userService from "../../domain/user/service/user.service";

const userRouter = Router();

userRouter.get("/", async (req: Request, res: Response) => {
  try {
    const users = await userService.listUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Error fetching users" });
  }
});

userRouter.post("/", async (req: Request, res: Response) => {
  try {
    const { name, email } = req.body;
    const user = await userService.createUser(name, email);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: "Error creating user" });
  }
});

export default userRouter;
