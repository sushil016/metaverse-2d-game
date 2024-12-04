import express, { Request, Response } from "express";
import authRoute from "./routes/authRoute";
const app = express();
app.use(express.json());

app.use("/api/v1/auth", authRoute);

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Hello World" });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
