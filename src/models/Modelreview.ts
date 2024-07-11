export class ModelReview {
  primaryKeyReview: number;
  referenceKeyUser: number;
  title: string;
  rating: number;
  description: string;
  date: Date;
  referenceKeyAd: number;

  constructor(
    referenceKeyUser: number,
    title: string,
    rating: number,
    description: string,
    referenceKeyAd: number
  ) {
    this.primaryKeyReview = Math.random();
    this.referenceKeyUser = referenceKeyUser;
    this.title = title;
    this.rating = rating;
    this.description = description;
    this.date = new Date();
    this.referenceKeyAd = referenceKeyAd;
  }
}
