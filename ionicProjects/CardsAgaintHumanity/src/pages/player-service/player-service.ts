import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { GlobalProvider } from '../golbal-provider/global-provider';


@Injectable()
export class PlayerService {

  public API = 'http://localhost:8090';

  constructor(public http: HttpClient, public globalProvider: GlobalProvider) {
  }

  getPlayers(): Observable<any> {

    return this.http.get(this.API + "/players");

  }

  deletePlayer(id){
    this.http.delete(this.API+"/player/"+id).subscribe(data => {});
  }

  postPlayer(player) {
    this.http.post(this.API + "/postPlayer", player).subscribe(data => {
      this.getPlayers().subscribe(list => {

        this.globalProvider.room = "Room:" + list[list.length - 1].room.id;
        this.globalProvider.id = list[list.length - 1].id;
        this.globalProvider.name = list[list.length - 1].name;
        this.globalProvider.img = list[list.length - 1].img;
        this.globalProvider.fullRoom = list[list.length - 1].room;
        this.globalProvider.fullcard = list[list.length - 1].cards;

      });
    })
  }


  updatePlayer(){
    var player = {
      name: this.globalProvider.name,
      pts:0,
      img: this.globalProvider.img,
      room: this.globalProvider.fullRoom,
      cards: this.globalProvider.fullcard
    }
    this.http.put(this.API+"/update/"+this.globalProvider.id,player).subscribe(dafuc=>{});
  }

  getBot(){
    return this.http.get(this.API+"/player/49");
  }

}
