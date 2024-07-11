export class ModelAd {
  primaryKeyAd: number;
  referenceKeyUser: number;
  title: string;
  description: string;
  price: number;
  createdAt: Date;
  sold: boolean;
  urlPhoto: string;
  status: string;
  referenceKeyUserPurchase: number;
  category: string;
  address: string;

  constructor(
    referenceKeyUser: number,
    title: string,
    description: string,
    price: number,
    sold: boolean,
    urlPhoto: string,
    status: string,
    category: string,
    address: string
  ) {
    this.primaryKeyAd = Math.random();
    this.referenceKeyUser = referenceKeyUser;
    this.title = title;
    this.description = description;
    this.price = price;
    this.createdAt = new Date();
    this.sold = sold;
    this.urlPhoto = urlPhoto;
    this.status = status;
    this.referenceKeyUserPurchase = 0;
    this.category = category;
    this.address = address;
  }
}
