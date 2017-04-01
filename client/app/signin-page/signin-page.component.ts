import { Component, OnInit } from '@angular/core';
import { SigninService } from './signin.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signin-page',
  templateUrl: './signin-page.component.html',
  styleUrls: ['./signin-page.component.css']
})
export class SigninPageComponent implements OnInit {
  router: Router;
  user: any = {"username": null, "password": null}

  constructor( _router: Router, private signinService: SigninService) {
    this.router = _router;
  }

  ngOnInit() {
  }

  signIn() {
      console.log(this.user);
      this.signinService.postUserInfo(this.user).subscribe(
        res => {
          if(res.validity) {
            this.router.navigate(['/post']);
          }
        }
      );
  }

}
