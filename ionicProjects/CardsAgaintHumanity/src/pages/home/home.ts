import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { JoinRoomPage } from '../join-room/join-room';
import { CreateRoomPage } from '../create-room/create-room';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {}

  goToJoin(){

    this.navCtrl.push(JoinRoomPage);

  }
  goToCreate(){

    this.navCtrl.push(CreateRoomPage);

  }
  

}
