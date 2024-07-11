import { Token } from "../models/Modeltoken";
export default class TokenControllers {
  token: ReadonlyArray<Readonly<Token>>;
  constructor() {
    this.token = [];
  }
}
