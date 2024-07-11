"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelDevice = void 0;
class ModelDevice {
    constructor(idUser, nameDevice) {
        this.primaryKeyDevice = Math.random();
        this.idUser = idUser;
        this.nameDevice = nameDevice;
    }
}
exports.ModelDevice = ModelDevice;
