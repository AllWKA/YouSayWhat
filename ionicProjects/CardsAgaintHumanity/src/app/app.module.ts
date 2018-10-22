import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { JoinRoomPage } from '../pages/join-room/join-room';
import { CreateRoomPage } from '../pages/create-room/create-room';
import { PlayRoomPage } from '../pages/play-room/play-room';

import { CardService } from '../pages/card/card';
import { RoomService } from '../pages/room-service/room-service';
import { PlayerService } from '../pages/player-service/player-service';
import { GlobalProvider}  from '../pages/golbal-provider/global-provider';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    JoinRoomPage,
    CreateRoomPage,
    PlayRoomPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    JoinRoomPage,
    CreateRoomPage,
    PlayRoomPage
  ],
  providers: [
    GlobalProvider,
    CardService,
    RoomService,
    PlayerService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
