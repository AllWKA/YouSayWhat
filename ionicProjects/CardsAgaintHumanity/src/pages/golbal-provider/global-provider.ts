import { Injectable } from '@angular/core';
 
@Injectable()
export class GlobalProvider {
 
  public id: Number;
  public room: String = "Room:loading...";
  public name: String;
  public img: String;
  public fullRoom;
  public voting: Boolean = false;
  public cards:Array<any>=[{},{},{}];
  public cardsUsed = new Set();
  public blackId: Number;
  public fullcard;
 
  constructor() {
 
  }
}