import { Component, OnInit } from '@angular/core';
import { MuzixService } from './muzix.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'MuzixAngular';

  constructor(private service: MuzixService) { }

  ngOnInit() {
    this.getData();
  }

  getData(){
    console.log("Hai Hai........");
    this.service.getData().subscribe((data) => {
      console.log("data is ", data['results']['trackmatches']['track']);
    });
  }

}
