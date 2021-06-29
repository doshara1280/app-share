import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogOutComponent } from './log-out/log-out.component';
import { WebappPostComponent } from './webapp-post/webapp-post.component';
import { MyPageComponent } from './my-page/my-page.component';
import { LogInComponent } from './log-in/log-in.component';
import { MyPageEditComponent } from './my-page-edit/my-page-edit.component';
import { WebappEditComponent } from './webapp-edit/webapp-edit.component';
import { WebappShowComponent } from './webapp-show/webapp-show.component';
import { CommentComponent } from './comment/comment.component';

const routes: Routes = [
  { path: 'webapp-post', component: WebappPostComponent },
  { path: 'log-out', redirectTo: '/', pathMatch: 'full' },
  { path: 'my-page', component: MyPageComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'log-in', component: LogInComponent },
  { path: 'my-page-edit', component: MyPageEditComponent },
  { path: 'webapp-edit', component: WebappEditComponent },
  { path: 'webapp-show', component: WebappShowComponent },
  { path: 'comment', component: CommentComponent },
  // { path: 'log-out', component: LogOutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
