import { Component, OnInit } from '@angular/core';
import { SigninService } from './signin.service'

@Component({
  selector: 'app-signin-page',
  templateUrl: './signin-page.component.html',
  styleUrls: ['./signin-page.component.css']
})
export class SigninPageComponent implements OnInit {

  user: any = {"username": null, "password": null}

  constructor(private signinService: SigninService) { }

  ngOnInit() {
  }

  signIn() {
      console.log(this.user);
      this.signinService.postUserInfo(this.user).subscribe(
        res => {

        }
      );
  }

}
