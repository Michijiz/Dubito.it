import { ModelAuth } from "../models/Modelauth";
export default class AuthController {
  auth: ReadonlyArray<Readonly<ModelAuth>>;

  constructor() {
    this.auth = [];
  }
}
