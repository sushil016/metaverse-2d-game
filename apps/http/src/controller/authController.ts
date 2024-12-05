import { Request, Response } from "express";
import { signUpSchema, signInSchema } from "../types";
import { prisma } from "@repo/database/client";

export const signUp = async (req: Request, res: Response) => {
  const { email, password, role } = signUpSchema.parse(req.body);

  if (!email || !password || !role) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const existingUser = await prisma.user.findUnique({
    where: { email },
  });
};
