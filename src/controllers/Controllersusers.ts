import { ModelUser } from "../models/Modeluser";

export default class UserController {
  users: ReadonlyArray<Readonly<ModelUser>>;

  constructor() {
    this.users = [];
  }

  signup(username: string, email: string, password: string) {
    const userExists = this.users.find((user) => user.email === email);

    if (userExists) {
      throw new Error("Utente già registrato");
    }

    const newUser = new ModelUser(username, email, password);
    this.users = [...this.users, newUser];

    console.log("Registrazione eseguita con successo.");
  }

  get user() {
    return this.users;
  }
}
