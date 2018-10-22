import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Slides } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { PlayRoomPage } from '../play-room/play-room';
import { RoomService } from '../room-service/room-service';
import { CardService } from '../card/card';
import { PlayerService } from '../player-service/player-service';



@Component({
  selector: 'page-join-room',
  templateUrl: 'join-room.html',
})
export class JoinRoomPage {
  
  private room;
  @ViewChild(Slides) slides: Slides;

  player = {

    nick: "",
    room: "",
    pwd: "",
    imgUrl: "../../assets/imgs/av1.png"

  }

  constructor(public cardService: CardService, public navCtrl: NavController, public navParams: NavParams, 
              private alertCtrl: AlertController, public roomService: RoomService, public playerService: PlayerService) {

  }

  submitJoin() {

    if (this.player.nick == "" || this.player.room.toString() == "") {
      let alert = this.alertCtrl.create({
        title: 'Empty field',
        subTitle: 'nick or room is empty.',
        buttons: ['close']
      });
      alert.present();

    } else {

      this.roomService.getRoom(Number.parseInt(this.player.room)).subscribe(room => {

        this.room = room;
        
        let newPlayer = {
          name: this.player.nick,
          pts: 0,
          img: this.player.imgUrl,
          room: this.room,
          card:[]
        }
        
        this.playerService.postPlayer(newPlayer);

        this.playerService.getPlayers().subscribe(list =>{
          console.log("jeje ",list[list.length]);
          
        });
        
        this.navCtrl.push(PlayRoomPage, {

          player: this.player

        });

      }, error =>{
        let alert = this.alertCtrl.create({
          title: 'There is not Room ',
          subTitle: 'There is not Room with the number ' + this.player.room,
          buttons: ['close']
        });
        alert.present();
        
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
