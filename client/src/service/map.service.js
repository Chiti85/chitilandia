import axios from "axios";

export default class Services {
  constructor() {
    this._service = axios.create({
      baseURL: "http://localhost:3000/MPoint",
      withCredentials: true // RUTAS PERSISTENTES
    });
  }
  getMPoint = cities => this._service.get(`/details/${cities}`);
}
