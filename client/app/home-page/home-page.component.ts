import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  // instantiate data to an empty array
  homeData: any = { "origin" : "unknown" };


  constructor(private homeService: HomeService) { }

  ngOnInit() {
    // Retrieve data from the API
    this.homeService.getHomeData().subscribe(posts => {
      console.log(posts);
      this.homeData = posts.json();
      // this.homeData ={ "origin" : "something" }
    });
  }

}
