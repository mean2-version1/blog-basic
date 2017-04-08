import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class PostService {

  constructor(private http: Http) { }

  // Get all posts from the API
  getPosts(){
      return this.http.get('/api/posts')
      .map(res => res);
  }

  getnOneUserPosts(obj){
      return this.http.post('/api/posts', obj)
      .map(res => res);
  }

  saveEditedPost(obj){
       return this.http.post('/api/posts/'+ obj._id + '/edit', obj)
      .map(res => res);
  }

  removeCurrentPost(obj){
       return this.http.get('/api/posts/'+ obj._id + '/remove')
      .map(res => res);
  }

}
