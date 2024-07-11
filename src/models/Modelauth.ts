export class ModelAuth {
  primaryKeyAuth: number;
  referenceKeyUser: number;
  devices: string[];
  token: number;

  constructor(referenceKeyUser: number, device: string) {
    this.primaryKeyAuth = Math.random();
    this.referenceKeyUser = referenceKeyUser;
    this.devices = [device];
    this.token = Math.random();
  }
}
