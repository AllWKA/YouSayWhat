import { Injectable } from "@angular/core";
import axios from "axios";
@Injectable({
  providedIn: "root"
})
export class BackEndServiceService {
  ip: string = "http://192.168.0.14:3000/api/v1/";
  local: string = "http://localhost:3000/api/v1";

  roomURI: string = this.local + "/rooms";
  playerURI: string = this.local + "/players";
  blackURI: string = this.local + "/blacks";

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
    try {
      return await axios.post(this.playerURI, userParameters);
    } catch (error) {
      return error;
    }
  }
  async joinRoom(player: Object, room: Object) {
    try {
      return await axios.post(
        this.playerURI + '/join',
        {
          player: player['data'],
          room: room['data']
        }
      );

    } catch (error) {
      return error;
    }
  }
}
