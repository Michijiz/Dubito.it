export class ModelDevice {
  primaryKeyDevice: number;
  idUser: number;
  nameDevice: string;

  constructor(idUser: number, nameDevice: string) {
    this.primaryKeyDevice = Math.random();
    this.idUser = idUser;
    this.nameDevice = nameDevice;
  }
}
