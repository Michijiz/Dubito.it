"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelAd = void 0;
class ModelAd {
    constructor(referenceKeyUser, title, description, price, sold, urlPhoto, status, category, address) {
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
exports.ModelAd = ModelAd;
