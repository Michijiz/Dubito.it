"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelAuth = void 0;
class ModelAuth {
    constructor(referenceKeyUser, device) {
        this.primaryKeyAuth = Math.random();
        this.referenceKeyUser = referenceKeyUser;
        this.devices = [device];
        this.token = Math.random();
    }
}
exports.ModelAuth = ModelAuth;
