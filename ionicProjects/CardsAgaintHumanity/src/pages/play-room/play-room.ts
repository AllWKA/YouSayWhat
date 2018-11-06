import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams, AlertController} from 'ionic-angular';
import { CardService } from '../card/card';
import { PlayerService } from '../player-service/player-service';
import { GlobalProvider } from '../golbal-provider/global-provider';

@Component({
  selector: 'page-play-room',
  templateUrl: 'play-room.html',
})
export class PlayRoomPage {

  @ViewChild('black') black: ElementRef;
  @ViewChild('answer1') answer1: ElementRef;
  @ViewChild('answer2') answer2: ElementRef;
  @ViewChild('answer3') answer3: ElementRef;
  @ViewChild('pepinillos') room: ElementRef;
  @ViewChild('whitesCards') whitesCards: ElementRef;

  private blacks: Array<any>;
  private whites: Array<any>;


  constructor(public navCtrl: NavController, private alertCtrl: AlertController,
    public cardService: CardService, public navParams: NavParams, public playerService: PlayerService, public globalProvider: GlobalProvider) {
  }

  ionViewWillLeave(){
    this.playerService.deletePlayer(this.globalProvider.id);
  }

  ionViewDidLoad() {

    this.cardService.getBlacks().subscribe(blacks => {

      this.blacks = blacks;
      this.showBlack();

    });

    this.cardService.getWhites().subscribe(whites => {

      this.whites = whites;
      this.showWhite();
    });
  }

  pick1() {
    this.globalProvider.fullcard[0] = this.globalProvider.cards[1];
    this.endPick();

  }
  pick2() {
    this.globalProvider.fullcard[0] = this.globalProvider.cards[2];
    this.endPick();

  }
  pick3() {
    this.globalProvider.fullcard[0] = this.globalProvider.cards[3];
    
    this.endPick();
  }

  endPick(){
    this.playerService.updatePlayer();
    let alert = this.alertCtrl.create({

      title: 'waiting...',
    });
    alert.present();
    this.sleep(30000);
    this.showAnswers();
    this.showWhite();
    this.showBlack();
  }

  showBlack() {
    var aux = Math.floor(Math.random() * this.blacks.length);
    this.black.nativeElement.innerHTML = this.blacks[aux].desc + " <br> - " + this.blacks[aux].author;
  }

  showAnswers(){
    this.playerService.getPlayers().subscribe(list=>{

      for (let i = 0; i < list.length; i++) {
        
        if (list[i].room.id == this.globalProvider.fullRoom.id && list[i].id != this.globalProvider.id) {
          console.log(list[i].cards[0].desc);
          
          let alert = this.alertCtrl.create({

            title: 'Answer by'+list[i].name,
            subTitle: list[i].cards[0].desc,
            buttons: ['close']
          });
          alert.present();
          this.sleep(15000);
        }
        
      }
    });
  }

  sleep(time) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > time){
        break;
      }
    }
  }

  showWhite() {
    var aux = Math.floor(Math.random() * this.whites.length);
    var aux2 = aux;
    this.globalProvider.cards[0] = this.whites[aux];
    this.answer1.nativeElement.innerHTML = this.whites[aux].desc + " <br> - " + this.whites[aux].author;
    while (aux == aux2) {
      aux = Math.floor(Math.random() * this.whites.length);
    }
    this.globalProvider.cards[1] = this.whites[aux];
    this.answer2.nativeElement.innerHTML = this.whites[aux].desc + " <br> - " + this.whites[aux].author;
    aux2 = aux;
    while (aux == aux2) {
      aux = Math.floor(Math.random() * this.whites.length);
    }
    this.globalProvider.cards[2] = this.whites[aux];
    this.answer3.nativeElement.innerHTML = this.whites[aux].desc + " <br> - " + this.whites[aux].author;
  }



}
