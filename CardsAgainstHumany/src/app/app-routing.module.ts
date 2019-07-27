import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'create-room', loadChildren: './create-room/create-room.module#CreateRoomPageModule' },
  { path: 'join-room', loadChildren: './join-room/join-room.module#JoinRoomPageModule' },
  { path: 'play-room', loadChildren: './play-room/play-room.module#PlayRoomPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
