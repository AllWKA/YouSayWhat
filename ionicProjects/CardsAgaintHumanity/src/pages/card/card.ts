import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CardService {
  public API = 'http://localhost:8090';

  constructor(public http: HttpClient) {
  }

  getBlacks(): Observable<any> {
    console.log(this.http.get(this.API + "/cards"));
    
    return this.http.get(this.API + "/blacks");
  }
  getWhites(): Observable<any> {
    return this.http.get(this.API + "/whites");
  }
}