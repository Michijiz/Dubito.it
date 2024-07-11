"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); //importiamo la libreria
const Controllersusers_1 = __importDefault(require("./controllers/Controllersusers"));
const user = new Controllersusers_1.default();
const app = (0, express_1.default)();
const server = express_1.default.json();
app.use(server);
app.get("/", (req, res) => {
    return res.send("Hello, World!");
});
app.get("/user", (req, res) => {
    return res.json([{ user: user.users }]);
});
app.post("/signup", (req, res) => {
    const { email, username, password } = req.body;
    user.signup(username, email, password);
    res
        .status(200)
        .json({ message: "registrato con successo", user: user.users });
});
app.listen(3000, function () {
    console.log(`Server is running on http://localhost:3000`);
});
