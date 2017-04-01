import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class SignupService {

  constructor(private http: Http) { }

  // Get all posts from the API
  createUser(user) {
    return this.http.post('/api/signup', user)
      .map(res => res.json());
  }

}
