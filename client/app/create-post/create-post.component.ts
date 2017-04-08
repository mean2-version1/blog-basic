import { Component, OnInit } from '@angular/core';
import { CreatePostService } from './create-post.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  router: Router;
  newPostObj: any = {
    'title': null,
    'content':null
  };

  constructor( _router: Router, private createPostService: CreatePostService) { 
    this.router = _router;
  }

  ngOnInit() {
  }
  createNewPost(){
      this.createPostService.newPost(this.newPostObj).subscribe(
        res => {
          if(res.valid){
            // show the post only for this user
            this.router.navigate(['/post', {'id':22}]);
          }
        }
      )
  }
}
