export class ModelReport {
  primaryKeyReport: number;
  referenceKeyUser: number;
  referenceKeyAd: number;
  closed: boolean;

  constructor(referenceKeyUser: number, referenceKeyAd: number) {
    this.primaryKeyReport = Math.random();
    this.referenceKeyUser = referenceKeyUser;
    this.referenceKeyAd = referenceKeyAd;
    this.closed = false;
  }
}
