import { Component, OnInit } from '@angular/core';
import axios from 'axios'
import { ActivatedRoute } from "@angular/router";

import blacks from "../../assets/cards/blacks";
import whites from "../../assets/cards/whites";

@Component({
  selector: 'app-play-room',
  templateUrl: './play-room.page.html',
  styleUrls: ['./play-room.page.scss'],
})
export class PlayRoomPage implements OnInit {

  constructor(private route: ActivatedRoute) { }

  roomURI: string = "http://172.17.165.65:3000/api/v1/rooms";
  playerURI: string = "http://172.17.165.65:3000/api/v1/players";

  player: Object = {
    name: "none",
    pts: 0
  };
  round: number = 0;

  allWhites: Array<Object> = whites;
  allBlacks: Array<Object> = blacks;

  whites: Array<Object> = [];
  //will update with socket
  blackId: number = 0;
  black: Object = this.allBlacks[5];

  whitesDone: Array<number> = []
  blacksDone: Array<number> = []

  ngOnInit() {
    this.getWhites()
    this.getPlayer()
  }
  getPlayer() {
    return this.route.queryParams.subscribe(async (params: Object) => {
      const player = await axios.get(this.playerURI + "/" + params["player"]);
      this.player = player.data;
    })
  }
  async getWhites() {
    this.whites = []
    for (let i = 0; i < 5; i++) {
      var a: number = await this.getRNGWhite();
      this.whites[i] = this.allWhites[a];
    }
  }
  getRNGWhite(): Promise<number> {
    return new Promise((resolve, reject) => {
      const max: number = this.allWhites.length;
      var result: number = Math.round(Math.random() * max);
      while (this.whitesDone.includes(result)) {
        result = Math.round(Math.random() * max);
      }
      this.whitesDone.push(result)
      resolve(result);
    });
  }
  getRNGBlack(): Promise<number> {
    return new Promise((resolve, reject) => {
      const max: number = this.allWhites.length;
      var result: number = Math.round(Math.random() * max);
      while (this.whitesDone.includes(result)) {
        result = Math.round(Math.random() * max);
      }
      this.whitesDone.push(result)
      resolve(result);
    });
  }

}
