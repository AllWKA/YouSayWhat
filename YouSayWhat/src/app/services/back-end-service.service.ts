import { Injectable } from "@angular/core";
import axios from "axios";
@Injectable({
  providedIn: "root"
})
export class BackEndServiceService {
  ip: string = "https://yousaywhayserver.herokuapp.com/api/v1/";
  local: string = "http://localhost:3000/api/v1";

  roomURI: string = this.ip + "/rooms";
  playerURI: string = this.ip + "/players";
  blackURI: string = this.ip + "/blacks";

  constructor() {}

  async getRoom(id: string) {
    try {
      return await axios.get(this.roomURI + "ById/" + id);
    } catch (error) {
      return error;
    }
  }
  async getBlack(id: string) {
    try {
      return await axios.get(this.blackURI + "/" + id);
    } catch (error) {
      return error;
    }
  }
  async deleteRoom(id: string) {
    try {
      return await axios.delete(this.roomURI + "/" + id);
    } catch (error) {
      return error;
    }
  }
  async createRoom(roomParameters: Object) {
    try {
      return await axios.post(this.roomURI, roomParameters);
    } catch (error) {
      return error;
    }
  }
  async createUser(userParameters: Object) {
    return await axios.post(this.playerURI, userParameters);
  }
  async joinRoom(player: Object, room: Object) {
    return await axios.post(this.playerURI + "/join", {
      player: player["data"],
      room: room["data"]
    });
  }
}
