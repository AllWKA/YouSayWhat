import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { Router } from "@angular/router";

@Component({
  selector: 'app-join-room',
  templateUrl: './join-room.page.html',
  styleUrls: ['./join-room.page.scss'],
})
export class JoinRoomPage implements OnInit {

  roomURI: string = "http://localhost:3000/api/v1/rooms";
  userURI: string = "http://localhost:3000/api/v1/players";
  userParameters: Object = {
    nick: ""
  };
  roomName: String = "";

  constructor(private route: Router) { }

  ngOnInit() {
  }
  async getRoom() {
    return await axios.get(this.roomURI + "/" + this.roomName);
  }
  async createPlayer() {
    return await axios.post(this.userURI, this.userParameters);
  }
  async join() {
    console.log()
    const room: Object = await this.getRoom();
    if (room) {
      const player: Object = await this.createPlayer();
      this.joinRoom(player, room);
    } else {
      alert("no room found");
    }
  }
  joinRoom(player: Object, room: Object) {
    console.log("joining....\n" + JSON.stringify(player) + "\n\n" + JSON.stringify(room))
    return axios.post(this.userURI + "/join", { player: player["data"], room: room["data"] })
      .then(joined => {
        if (joined) {
          console.log(joined);
          this.route.navigateByUrl('/play-room?player=' + player["_id"] + '&room=' + room["_id"])
          return true
        } else { return false }
      })
      .catch(err => {
        alert(err);
        return false;
      })
  }
}
