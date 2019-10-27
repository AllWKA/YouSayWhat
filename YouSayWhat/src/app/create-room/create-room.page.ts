import { Component, OnInit } from '@angular/core';
import axios from "axios";
import { Router } from "@angular/router";
@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.page.html',
  styleUrls: ['./create-room.page.scss'],
})
export class CreateRoomPage implements OnInit {

  roomURI: string = "http://localhost:3000/api/v1/rooms";
  userURI: string = "http://localhost:3000/api/v1/players";

  roomParameters: Object = {
    name: "",
    maxPlayers: 2,
    pwd: "",
  };
  userParameters: Object = {
    nick: ""
  };

  constructor(private route: Router) {
  }

  ngOnInit() {
  }
  deleteRoom(id: string) {
    axios.delete(this.roomURI + "/" + id)
      .then(room => {
        alert("room:" + room.data.name + " was not created.")
      })
      .catch(err => alert(err))
  }
  async createRoom() {
    const room: Object = await axios.post(this.roomURI, this.roomParameters);
    var player: Object = {};
    if (room) {
      player = await this.createUser();
      if (player != false) {
        this.joinRoom(player, room)
      } else {
        this.deleteRoom(room["data"]["_id"]);
        alert("player not created")
      }
    } else {
      alert("room not created");
    }
  }
  createUser() {
    return axios.post(this.userURI, this.userParameters)
      .then(user => {
        if (user) { return user }
        else { return false }
      })
      .catch(err => {
        alert(err);
        return false;
      });
  }
  joinRoom(player: Object, room: Object) {
    return axios.post(this.userURI + "/join", { player: player["data"], room: room["data"] })
      .then(joined => {
        if (joined) {
          this.route.navigateByUrl('/play-room?player=' + player["data"]["_id"] + '&room=' + room["data"]["_id"])
          return true
        } else { return false }
      })
      .catch(err => {
        alert(err);
        return false;
      })
  }
  validations(): Boolean {

    if (this.roomParameters["name"] != "" && this.roomParameters["pwd"] != "" && this.userParameters["nick"] != "") {

      return true;
    } else {

      alert("some field is null")
      return false;
    }
  }


}
