import { ModelDevice } from "./modules/Modeldevice";
import { ModelUser } from "./modules/Modeluser";
import { ModelAd } from "./modules/Modelad";
import { ModelReview } from "./modules/Modelreview";
import { ModelAuth } from "./modules/Modelauth";
import { ModelReport } from "./modules/Modelreport";
import { ModelFavorite } from "./modules/Modelfavorites";

class App {
  users: ModelUser[];
  ads: ModelAd[];
  reviews: ModelReview[];
  auth: ModelAuth[];
  reports: ModelReport[];
  favorites: ModelFavorite[];
  devices: ModelDevice[];

  constructor() {
    this.users = [];
    this.ads = [];
    this.reviews = [];
    this.auth = [];
    this.reports = [];
    this.favorites = [];
    this.devices = [];
  }

  login(email: string, password: string): number | undefined {
    const userFound = this.users.find(
      (user) => user.email === email && user.password === password
    );

    if (userFound) {
      const newAuth = new ModelAuth(userFound.primaryKeyUser, "defaultDevice");
      this.auth = [...this.auth, newAuth];
      return newAuth.token;
    } else {
      console.log("Ma chi sei?");
    }
  }

  registerDevice(idUser: number, nameDevice: string): void {
    const userDevices = this.devices.filter(
      (device) => device.idUser === idUser
    );
    if (userDevices.length >= 2) {
      console.log(
        "L'utente dispone già di 2 dispositivi, deve eliminare uno per aggiungere un altro."
      );
      return;
    }

    const device = new ModelDevice(idUser, nameDevice);
    this.devices = [...this.devices, device];
  }

  register(username: string, email: string, password: string): void {
    const userFound = this.users.find((user) => user.email === email);

    if (userFound) {
      console.log("Utente già registrato.");
    } else {
      const newUser = new ModelUser(username, email, password);
      this.users = [...this.users, newUser];
      console.log("Registrazione effettuata con successo.");
    }
  }

  logout(token: number): void {
    const authIndex = this.auth.findIndex((auth) => auth.token === token);
    if (authIndex !== -1) {
      this.auth = [
        ...this.auth.slice(0, authIndex),
        ...this.auth.slice(authIndex + 1)
      ];
      console.log("Logout effettuato con successo.");
    } else {
      console.log("Token non valido.");
    }
  }

  modifyUsername(username: string, token: number): void {
    const authFound = this.auth.find((auth) => auth.token === token);
    if (authFound) {
      const userFound = this.users.find(
        (user) => user.primaryKeyUser === authFound.referenceKeyUser
      );
      if (userFound) {
        userFound.username = username;
        console.log("Username modificato con successo.");
      }
    } else {
      console.log("Token non valido.");
    }
  }

  deleteAccount(token: number): void {
    const authFound = this.auth.find((auth) => auth.token === token);
    if (authFound) {
      this.users = this.users.filter(
        (user) => user.primaryKeyUser !== authFound.referenceKeyUser
      );
      this.auth = this.auth.filter(
        (auth) => auth.referenceKeyUser !== authFound.referenceKeyUser
      );
      console.log("Account cancellato con successo.");
    } else {
      console.log("Token non valido.");
    }
  }

  createAd(
    primaryKeyAd: number,
    token: number,
    title: string,
    description: string,
    price: number,
    createdAt: Date,
    sold: boolean,
    urlPhoto: string,
    status: string,
    referenceKeyUserPurchase: string,
    category: string,
    address: string
  ): number | void {
    const authFound = this.auth.find((auth) => auth.token === token);
    if (!authFound) {
      console.log("Token non valido.");
    } else {
      const newAd = new ModelAd(
        primaryKeyAd,
        token,
        title,
        description,
        price,
        createdAt,
        sold,
        urlPhoto,
        status,
        referenceKeyUserPurchase,
        category,
        address
      );
      this.ads = [...this.ads, newAd];
      console.log("Annuncio creato con successo.");
      return newAd.primaryKeyAd;
    }
  }

  updateAd(
    referenceKeyAd: number,
    title: string,
    description: string,
    price: number,
    status: string,
    urlPhoto: string,
    category: string,
    address: string,
    token: number
  ): void {
    let adModified;
    const authFound = this.auth.find((auth) => auth.token === token);
    if (authFound) {
      adModified = this.ads.find((ad) => ad.primaryKeyAd === referenceKeyAd);
      if (adModified) {
        adModified.title = title;
        adModified.description = description;
        adModified.price = price;
        adModified.status = status;
        adModified.urlPhoto = urlPhoto;
        adModified.category = category;
        adModified.address = address;
        console.log("Annuncio aggiornato con successo.");
      } else {
        console.log("Annuncio non trovato.");
      }
    } else {
      console.log("Token non valido.");
    }
  }

  deleteAd(referenceKeyAd: number, token: number): void {
    const authFound = this.auth.find((auth) => auth.token === token);
    if (authFound) {
      this.ads = this.ads.filter(
        (ad) => ad.primaryKeyAd !== referenceKeyAd || ad.referenceKeyUser !== authFound.referenceKeyUser
      );
      console.log("Annuncio cancellato con successo.");
    } else {
      console.log("Token non valido.");
    }
  }

  updatedAdAsSold(
    referenceKeyAd: number,
    referenceKeyUserPurchase: string,
    token: number: ModelAd 
  ) {
    const authFound = this.auth.find((auth) => auth.token === token);

    if (!authFound) {
      console.log("Token non valido.");
      return;
    }

    const ad = this.ads.find((ad) => ad.primaryKeyAd === referenceKeyAd);

    if (!ad) {
      console.log("Annuncio non trovato.");
      return;
    }

    ad.referenceKeyUserPurchase = referenceKeyUserPurchase;
    ad.sold = true;

    console.log("Annuncio segnato come venduto.");
  }

  createReview(
    referenceKeyUser: number,
    title: string,
    rating: number,
    description: string,
    referenceKeyAd: number,
    token: number
  ): void {
    const authFound = this.auth.find((auth) => auth.token === token);

    if (!authFound) {
      console.log("Token non valido.");
      return;
    }

    const newReview = new ModelReview(
      referenceKeyUser,
      title,
      rating,
      description,
      referenceKeyAd
    );

    this.reviews = [...this.reviews, newReview];
    console.log("Recensione creata con successo.");
  }

  createReport(referenceKeyAd: number, token: number): void {
    const authFound = this.auth.find((auth) => auth.token === token);
    if (!authFound) {
      console.log("Token non valido.");
    } else {
      const newReport = new ModelReport(
        authFound.referenceKeyUser,
        referenceKeyAd
      );
      this.reports = [...this.reports, newReport];
      console.log("Report creato con successo.");
    }
  }

  createFavorite(referenceKeyAd: number, token: number): void {
    const authFound = this.auth.find((auth) => auth.token === token);
    if (!authFound) {
      console.log("Token non valido.");
    } else {
      const newFavorite = new ModelFavorite(
        authFound.referenceKeyUser,
        referenceKeyAd
      );
      this.favorites = [...this.favorites, newFavorite];
      console.log("Annuncio aggiunto ai preferiti con successo.");
    }
  }
}

const app = new App();