export class ModelFavorite {
  primaryKeyFavorite: number;
  referenceKeyUser: number;
  referenceKeyAd: number;

  constructor(referenceKeyUser: number, referenceKeyAd: number) {
    this.primaryKeyFavorite = Math.random();
    this.referenceKeyUser = referenceKeyUser;
    this.referenceKeyAd = referenceKeyAd;
  }
}
