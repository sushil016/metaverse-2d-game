import express, { Request, Response } from "express";
const router = express.Router();

router.post("/user/signup", (req: Request, res: Response) => {
  res.json({ message: "User signed up" });
});

router.post("/user/signin", (req: Request, res: Response) => {
  res.json({ message: "User signed in" });
});

export default router;
