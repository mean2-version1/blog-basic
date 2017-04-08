import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
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
  editingPost:any = {};

  editingPostFlag:boolean = false;


  constructor(private route: ActivatedRoute, private postService: PostService, private ref: ChangeDetectorRef) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
       this.obj.id = params['id']; // (+) converts string 'id' to a number
      //  alert('id' + ':' +  this.id);
       if(this.obj.id){
         this.postService.getnOneUserPosts(this.obj).subscribe(
          res => {
          this.posts = res.json();
          console.log("all posts of this user: " + this.posts);
         });
       } else {
            // Retrieve data from the API
            this.postService.getPosts().subscribe(
              res => {
              this.posts = res.json();
              // this.homeData ={ "origin" : "something" }
            });

       }
    });
   
  }

  editBlog(post){
    this.editingPost = post;
    this.editingPostFlag = true;
  }

  savedEditedPost(){
    this.editingPostFlag = false;
    this.postService.saveEditedPost(this.editingPost).subscribe(
      res => {

      }
    )

  }

  deletePost(post) {
    //update client side obj, this will refresh the UI more quickly than update from server 
    for(var i=0; i < this.posts.length; i++) {
      if(this.posts[i]._id == post._id) {
        this.posts.splice(i,1);
         break;
      }
    }

    this.postService.removeCurrentPost(post).subscribe(
      res => {
      }
    )
  }

}
