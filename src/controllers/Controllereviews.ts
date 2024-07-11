import { ModelAd } from "../models/Modelad";
import { ModelReview } from "../models/Modelreview";
export default class ReviewControllers {
  review: ReadonlyArray<Readonly<ModelReview>>;

  constructor() {
    this.review = [];
  }
}
