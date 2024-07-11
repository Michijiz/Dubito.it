import { ModelAd } from "./models/Modelad";
import { ModelAuth } from "./models/Modelauth";
import { ModelDevice } from "./models/Modeldevice";
import { ModelFavorite } from "./models/Modelfavorites";
import { ModelReview } from "./models/Modelreview";
import { ModelUser } from "./models/Modeluser";

class App {
  users: ReadonlyArray<Readonly<ModelUser>>;
  ads: ReadonlyArray<Readonly<ModelAd>>;
  reviews: ReadonlyArray<Readonly<ModelReview>>;
  auth: ReadonlyArray<Readonly<ModelAuth>>;
  favorites: ReadonlyArray<Readonly<ModelFavorite>>;
  devices: ReadonlyArray<Readonly<ModelDevice>>;

  constructor() {
    this.users = [];
    this.ads = [];
    this.reviews = [];
    this.auth = [];
    this.favorites = [];
    this.devices = [];
  }
}
