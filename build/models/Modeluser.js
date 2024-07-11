"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelUser = void 0;
class ModelUser {
    constructor(username, email, password) {
        this.primaryKeyUser = Math.random();
        this.username = username;
        this.email = email;
        this.password = password;
    }
}
exports.ModelUser = ModelUser;
