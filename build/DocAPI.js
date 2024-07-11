"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocAPI = void 0;
class DocAPI {
    constructor(path, method, authenticated) {
        this.path = "";
        this.authenticated = true;
        this.path = `/api${path}`;
        this.method = method;
        this.authenticated = authenticated;
    }
}
exports.DocAPI = DocAPI;
const login = new DocAPI("/login", "POST", false);
const register = new DocAPI("/register", "POST", false);
const registerDevice = new DocAPI("/register/device", "POST", true);
const logout = new DocAPI("/logout", "POST", true);
const createAD = new DocAPI("/createAD", "POST", true);
const updateAD = new DocAPI("/ads/34", "PUT", true);
const deleteAD = new DocAPI("/ads/34", "DELETE", true);
const updatedAdAsSold = new DocAPI("/updatedAdAsSold", "PUT", true);
const createReview = new DocAPI("/createReview", "POST", true);
const createReport = new DocAPI("/createReport", "POST", true);
const deleteAccount = new DocAPI("/deleteAccount", "DELETE", true);
const modifyUsername = new DocAPI("/modifyUsername", "PUT", true);
const createFavorite = new DocAPI("/createFAvorite", "POST", true);
