import { ModelDevice } from "../models/Modeldevice";
export default class DeviceController {
  device: ReadonlyArray<Readonly<ModelDevice>>;

  constructor() {
    this.device = [];
  }
}
