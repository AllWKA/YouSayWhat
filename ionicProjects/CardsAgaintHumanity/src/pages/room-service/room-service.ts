import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PlayerService } from '../player-service/player-service';

@Injectable()
export class RoomService {

  public API = 'http://localhost:8090';

  constructor(public http: HttpClient, public playerService: PlayerService) {
  }

  getRoom(i:number){

    console.log("--lol",this.http.get(this.API + "/room/" + i));

    return this.http.get(this.API+"/room/"+i)

  }

  getRooms(): Observable <any> {

    return this.http.get(this.API+"/rooms");

  }

  postRoom(room, creator): Number{

    this.http.post(this.API+"/postRoom",room).subscribe(data=>{

      this.getRooms().subscribe(rooms=>{

        creator.room = {
          id: rooms[rooms.length-1].id,
          tta: rooms[rooms.length-1].tta,
          maxPlayer: rooms[rooms.length-1].maxPlayer
  
        }

        return this.playerService.postPlayer(creator);
        

      });
      
    });
    return -1;
  }
}
