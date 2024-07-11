"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Token = void 0;
class Token {
    constructor(primaryKeyUser) {
        this.primaryKey = Math.random();
        this.primaryKeyUser = primaryKeyUser;
    }
}
exports.Token = Token;
