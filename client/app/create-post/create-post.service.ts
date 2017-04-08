import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CreatePostService {

  constructor(private http: Http) { }
  
  newPost(post) {
    return this.http.post('/api/posts/create', post)
      .map(res => res.json());
  }
}
