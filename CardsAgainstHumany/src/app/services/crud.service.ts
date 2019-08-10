import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from "angularfire2/firestore";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { RoomI } from "../models/room";

@Injectable({
  providedIn: 'root'
})
export class CRUDService {
  private roomsCollection: AngularFirestoreCollection<RoomI>;
  private rooms: Observable<RoomI[]>
  constructor(db: AngularFirestore) {
    this.roomsCollection = db.collection<RoomI>('room');
    this.rooms = this.roomsCollection.snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...data };
      }
      )
    }
    ));
  }

  getRooms() {
    return this.rooms;
  }
  getRoom(id: String) {
    return this.roomsCollection.doc<RoomI>(id).valueChanges();
  }
}
