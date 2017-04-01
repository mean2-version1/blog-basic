import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.css']
})
export class PostPageComponent implements OnInit {

  dummyData: any = { "origin" : '' };

  constructor(private postSerice: PostService) { }

  ngOnInit() {

  }

}
