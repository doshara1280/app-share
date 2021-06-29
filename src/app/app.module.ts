import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogOutComponent } from './log-out/log-out.component';
import { WebappPostComponent } from './webapp-post/webapp-post.component';
import { MyPageComponent } from './my-page/my-page.component';
import { LogInComponent } from './log-in/log-in.component';
import { MyPageEditComponent } from './my-page-edit/my-page-edit.component';
import { WebappEditComponent } from './webapp-edit/webapp-edit.component';
import { WebappShowComponent } from './webapp-show/webapp-show.component';
import { CommentComponent } from './comment/comment.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LogOutComponent,
    WebappPostComponent,
    MyPageComponent,
    LogInComponent,
    MyPageEditComponent,
    WebappEditComponent,
    WebappShowComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
