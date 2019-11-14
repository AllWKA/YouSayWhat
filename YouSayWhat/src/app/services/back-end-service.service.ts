import { Injectable } from '@angular/core';
import axios from 'axios';
@Injectable({
  providedIn: 'root'
})
export class BackEndServiceService {

  ip: string = "http://192.168.0.14:3000/api/v1/";
  local: string = "http://localhost:3000/api/v1";

  roomURI: string = this.local + "/rooms";
  playerURI: string = this.local + "/players";
  blackURI:string = this.local + "/blacks"

  constructor() { }
  getRoom(id: string) {
    return axios.get(this.roomURI + 'ById/' + id);
  }
  getBlack(id: string) {
    console.log(this.blackURI + '/' + id);
    return axios.get(this.blackURI + '/' + id);
  }
}
