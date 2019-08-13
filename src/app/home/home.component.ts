import { Component, OnInit } from '@angular/core';
import {MuzixService} from '../muzix.service';
import { Result } from '../modals/Result';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public tracks: Result;

  constructor(private muzixService : MuzixService) { }

  ngOnInit() {
    // this.tracks = this.muzixService.results;
    // console.log(this.tracks);
  }

  
}
