"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelReport = void 0;
class ModelReport {
    constructor(referenceKeyUser, referenceKeyAd) {
        this.primaryKeyReport = Math.random();
        this.referenceKeyUser = referenceKeyUser;
        this.referenceKeyAd = referenceKeyAd;
        this.closed = false;
    }
}
exports.ModelReport = ModelReport;
