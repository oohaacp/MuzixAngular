import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { TrackComponent } from './track/track.component';
import { HomeComponent } from './home/home.component';
import { PlayListComponent } from './play-list/play-list.component';


const routes: Routes = [
  {
    path : '',
    component:TrackComponent
  },
  {
    path : 'track/:searchString',
    component:TrackComponent
  },
  {
    path : 'playList',
    component : PlayListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
