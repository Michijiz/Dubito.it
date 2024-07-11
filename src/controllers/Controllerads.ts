import { ModelAd } from "../models/Modelad";
export default class Adcontroller {
  ads: ReadonlyArray<Readonly<ModelAd>>;

  constructor() {
    this.ads = [];
  }
}
