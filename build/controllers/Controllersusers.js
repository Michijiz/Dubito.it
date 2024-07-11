"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Modeluser_1 = require("../models/Modeluser");
class UserController {
    constructor() {
        this.users = [];
    }
    signup(username, email, password) {
        const userExists = this.users.find((user) => user.email === email);
        if (userExists) {
            throw new Error("Utente già registrato");
        }
        const newUser = new Modeluser_1.ModelUser(username, email, password);
        this.users = [...this.users, newUser];
        console.log("Registrazione eseguita con successo.");
    }
    get user() {
        return this.users;
    }
}
exports.default = UserController;
