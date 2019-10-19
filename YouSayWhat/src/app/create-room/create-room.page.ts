import { Component, OnInit } from '@angular/core';
import axios from "axios";
@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.page.html',
  styleUrls: ['./create-room.page.scss'],
})
export class CreateRoomPage implements OnInit {

  roomURI: string = "http://localhost:3000/api/v1/rooms";
  userURI: string = "http://localhost:3000/api/v1/users"
  roomParameters: Object = {
    name: "",
    maxPlayers: 2,
    pwd: "",
  };
  userParameters: Object = {
    nick: ""
  };

  constructor() { }

  ngOnInit() {
  }
  deleteRoom(id: string) {
    axios.delete(this.roomURI + "/" + id)
      .then(room => {
        console.log(room)
        this.joinRoom();
      })
      .catch(err => alert(err))
  }
  createRoom(): void {
    axios.post(this.roomURI, this.roomParameters)
      .then((room) => {
        console.log(room)
        if (room) {
          if (this.joinRoom()) {
            console.log("joined")
          } else {
            this.deleteRoom(room["data"]["_id"]);
          }
        } else {
          alert("room not created")
        }
      })
      .catch(err => alert(err))
  }
  createUser() {
    return axios.post(this.userURI, this.userParameters)
      .then(user => {
        if (user) {
          console.log(user)
          return true
        } else {
          return false
        }
      })
      .catch(err => {
        alert(err);
        return false;
      })
  }
  joinRoom(): Boolean {
    console.log("joing")
    return false;
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
