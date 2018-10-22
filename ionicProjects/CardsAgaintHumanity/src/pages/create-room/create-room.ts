import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { PlayRoomPage } from '../play-room/play-room';
import { RoomService } from '../room-service/room-service';
import { PlayerService } from '../player-service/player-service';

@Component({
  selector: 'page-create-room',
  templateUrl: 'create-room.html',
})
export class CreateRoomPage {

  @ViewChild(Slides) slides: Slides;

  player = {

    nick: "",
    imgUrl: "../../assets/imgs/av1.png"

  }
  room = {
    tta: "",
    maxPlayers: ""
  }

  constructor(public navCtrl: NavController, private alertCtrl: AlertController, public roomService: RoomService, public playerService: PlayerService) {
  }

  submitCreate() {

    if (this.player.nick == "" || this.room.maxPlayers == "" || this.room.tta == "") {
      let alert = this.alertCtrl.create({
        title: 'Empty fields',
        subTitle: 'nick, time to answer or max players is empty.',
        buttons: ['close']
      });
      alert.present();
    } else {
      let newPlayer = {
        name: this.player.nick,
        pts: 0,
        img: this.player.imgUrl,
        room: this.room,
        card: []
      }
      this.roomService.postRoom(this.room, newPlayer);
     
      this.navCtrl.push(PlayRoomPage, {

        player: this.player

      });
    }

  }
  slideChanged() {

    switch (this.slides.getActiveIndex()) {

      case 0:
        this.player.imgUrl = "../../assets/imgs/av1.png";
        break;
      case 1:
        this.player.imgUrl = "../../assets/imgs/av2.jpg";
        break;
      case 2:
        this.player.imgUrl = "../../assets/imgs/av3.png";
        break;
      case 3:
        this.player.imgUrl = "../../assets/imgs/av4.png";
        break;

    }

  }

}
