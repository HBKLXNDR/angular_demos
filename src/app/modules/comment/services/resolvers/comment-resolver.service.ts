import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {IComment} from "../../interfaces";
import {CommentService} from "../comment.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CommentResolverService implements Resolve<IComment> {

  constructor(private commentService: CommentService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IComment> | Promise<IComment> | IComment {
    const {id} = route.params;
    return this.commentService.getById(id);
  }
}
