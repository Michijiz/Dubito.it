import { ModelUser } from "./Modeluser";

export  class Token {
  primaryKey: number;
  primaryKeyUser: ModelUser["primaryKeyUser"];

  constructor(primaryKeyUser: ModelUser["primaryKeyUser"]) {
    this.primaryKey = Math.random();
    this.primaryKeyUser = primaryKeyUser;
  }
}
