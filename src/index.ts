import express, { Request, Response } from "express"; //importiamo la libreria
import UserController from "./controllers/Controllersusers";
const user = new UserController();
const app = express();

const server = express.json();
app.use(server);

app.get("/", (req: Request, res: Response) => {
  return res.send("Hello, World!");
});

app.get("/user", (req: Request, res: Response) => {
  return res.json([{ user: user.users }]);
});

app.post("/signup", (req: Request, res: Response) => {
  const { email, username, password } = req.body;
  user.signup(username, email, password);
  res
    .status(200)
    .json({ message: "registrato con successo", user: user.users });
});

app.listen(3000, function () {
  console.log(`Server is running on http://localhost:3000`);
});
