import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.css']
})
export class PostPageComponent implements OnInit {

  posts: any = [];
  obj: any = {'id':null};
  flag:boolean = false;

  constructor(private route: ActivatedRoute, private postService: PostService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
       this.obj.id = params['id']; // (+) converts string 'id' to a number
      //  alert('id' + ':' +  this.id);
       if(this.obj.id){
         this.postService.getnOneUserPosts(this.obj).subscribe(
          res => {
          console.log(res);
          this.posts = res.json();
          this.flag = true;
         });
       } else {
            // Retrieve data from the API
            this.postService.getPosts().subscribe(
              res => {
              console.log(res);
              this.posts = res.json();
              // this.homeData ={ "origin" : "something" }
            });

       }
    });
   
  }

}
