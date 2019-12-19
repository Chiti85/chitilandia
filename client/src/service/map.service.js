import axios from "axios";

export default class Services {
  constructor() {
    this._service = axios.create({
      baseURL: `${process.env.REACT_APP_URL}/MPoint`,
      withCredentials: true // RUTAS PERSISTENTES
    });
  }
  getMPoint = cities => this._service.get(`/details/${cities}`);
}
