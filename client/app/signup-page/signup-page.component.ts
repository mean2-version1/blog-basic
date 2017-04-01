import { Component, OnInit } from '@angular/core';
import { SignupService } from './signup.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {
  router: Router;
  user:any = {
    "username": null, "password": null,
    "repassword" : null, "bio": null,
    "gender": null
  };

  constructor( _router: Router, private signupService: SignupService) {
    this.router = _router;
  }

  ngOnInit() {
  }

  signUp() {
    console.log(this.user);
    this.signupService.createUser(this.user).subscribe(
      res => {
        if(res.validity) {
          this.router.navigate(['/post']);
        }
      }
    );
  }

}
