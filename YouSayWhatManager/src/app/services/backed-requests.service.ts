import { Injectable } from "@angular/core";
import axios from "axios";
@Injectable({
  providedIn: "root"
})
export class BackedRequestsService {
  constructor() {}

  URI: string = "http://localhost:3000/api/v1/";

   getBlacks() {
    const blacks =  axios.get(this.URI + "blacks");
    console.log("result:",blacks);
    return blacks;
   }
  postBlack(black) {
    return axios.post(this.URI + "blacks",black);
  }
  eliminateBlack(id) {
    return axios.delete(this.URI+"blacks/"+id)
  }
}
