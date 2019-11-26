import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { BackEndServiceService } from "../services/back-end-service.service";

@Component({
  selector: "app-create-room",
  templateUrl: "./create-room.page.html",
  styleUrls: ["./create-room.page.scss"]
})
export class CreateRoomPage implements OnInit {
  roomParameters: Object = {
    name: "",
    maxPlayers: 2,
    pwd: ""
  };
  userParameters: Object = {
    nick: ""
  };

  constructor(private route: Router, private back: BackEndServiceService) { }
  ngOnInit(){}
  async createRoom() {
    if (this.validations()) {
      try {
        const room: Object = await this.back.createRoom(this.roomParameters);
        const player: Object = await this.back.createUser(this.userParameters);
        this.back.joinRoom(player, room);
        this.route.navigateByUrl('/play-room?player='
          + player["data"]["_id"] + '&room='
          + room["data"]["_id"])
      } catch (error) {
        alert(error)
      }
    }
  }
  validations(): Boolean {
    if (
      this.roomParameters["name"] != "" &&
      this.roomParameters["pwd"] != "" &&
      this.userParameters["nick"] != ""
    ) {
      return true;
    } else {
      alert("some field is null");
      return false;
    }
  }
}
