import { ModelFavorite } from "../models/Modelfavorites";
export default class FavoritesControllers {
  favorites: ReadonlyArray<Readonly<ModelFavorite>>;
  constructor() {
    this.favorites = [];
  }
}
