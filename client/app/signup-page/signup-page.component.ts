import { Component, OnInit } from '@angular/core';
import { SignupService } from './signup.service'

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {

  user:any = {
    "username": null, "password": null,
    "repassword" : null, "bio": null,
    "gender": null
  };

  constructor( private signupService: SignupService) { }

  ngOnInit() {
  }

  signUp() {
    console.log(this.user);
    this.signupService.createUser(this.user).subscribe(
      res => {
        console.log(res)
      }
    );
  }

}
