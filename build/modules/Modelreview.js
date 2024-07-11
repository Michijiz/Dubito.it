"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelReview = void 0;
class ModelReview {
    constructor(referenceKeyUser, title, rating, description, referenceKeyAd) {
        this.primaryKeyReview = Math.random();
        this.referenceKeyUser = referenceKeyUser;
        this.title = title;
        this.rating = rating;
        this.description = description;
        this.date = new Date();
        this.referenceKeyAd = referenceKeyAd;
    }
}
exports.ModelReview = ModelReview;
