import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CommentsComponent} from "./components/comments/comments.component";
import {CommentDetailsComponent} from "./components/comment-details/comment-details.component";
import {CommentResolverService} from "./services";
import {MyGuardGuard} from "./guards";

const routes: Routes = [
  {
    path: '', component: CommentsComponent, canActivate: [MyGuardGuard], children: [
      {path: ':id', component: CommentDetailsComponent, resolve: {data: CommentResolverService}}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentRoutingModule {
}
