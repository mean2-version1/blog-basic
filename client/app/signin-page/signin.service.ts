import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class SigninService {

  constructor(private http: Http) { }

  // Get all posts from the API
  getHomeData() {
    return this.http.get('/api/signin')
      .map(res => res);
  }

}
