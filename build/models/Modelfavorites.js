"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelFavorite = void 0;
class ModelFavorite {
    constructor(referenceKeyUser, referenceKeyAd) {
        this.primaryKeyFavorite = Math.random();
        this.referenceKeyUser = referenceKeyUser;
        this.referenceKeyAd = referenceKeyAd;
    }
}
exports.ModelFavorite = ModelFavorite;
