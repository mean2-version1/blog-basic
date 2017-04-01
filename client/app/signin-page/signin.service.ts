import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class SigninService {

  constructor(private http: Http) { }

  // Get all posts from the API
  postUserInfo(user) {
    return this.http.post('/api/signin', user)
      .map(res => res.json());
  }

}
