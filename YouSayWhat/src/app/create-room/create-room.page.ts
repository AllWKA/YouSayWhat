import { Component, OnInit } from '@angular/core';
import axios from "axios";
@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.page.html',
  styleUrls: ['./create-room.page.scss'],
})
export class CreateRoomPage implements OnInit {

  URI: string = "http://localhos:3000/api/v1/rooms";
  roomParameters: Object = {
    name: "",
    maxPlayers: 2,
    pwd: "",
  }
  userParameters: Object = {
    nick: ""
  }

  constructor() { }

  ngOnInit() {
  }
  createRoom() {
    axios.post(this.URI, {})
      .then(room => {

      })
      .catch(err => alert(err))
  }
  joinRoom() {

  }
  validations() {

  }

}
