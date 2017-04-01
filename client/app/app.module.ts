import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SigninPageComponent } from './signin-page/signin-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { PostPageComponent } from './post-page/post-page.component';

import { HomeService } from './home-page/home.service';
import { SigninService } from './signin-page/signin.service';
import { SignupService } from './signup-page/signup.service';
import { PostService } from './post-page/post.service';


const ROUTES = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'signin',
    component: SigninPageComponent
  },
  {
    path: 'signup',
    component: SignupPageComponent
  },
  {
    path: 'post',
    component: PostPageComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SigninPageComponent,
    SignupPageComponent,
    PostPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    NgbModule.forRoot()
  ],
  providers: [HomeService, SigninService, SignupService, PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
