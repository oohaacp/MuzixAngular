import { Component, OnInit } from '@angular/core';
import { MuzixService } from '../muzix.service';
import {Track} from '../modals/Track';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private muzixService : MuzixService, private router : Router) { }

  ngOnInit() {
  }

  public TrackList : Track[];

  getPlayList(){
    this.muzixService.getPlayList().subscribe((data) =>{
       this.TrackList = data
       console.log(this.TrackList);
       this.muzixService.trackList = data;
       this.router.navigateByUrl('/playList');
    })
  }

}
