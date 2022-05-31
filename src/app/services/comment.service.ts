import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IComment} from "../models/IComment";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  url = "http://jsonplaceholder.typicode.com/posts"


  constructor(private http: HttpClient) {
  }

  getComments(): Observable<IComment[]> {
    return this
      .http
      .get<any[]>(this.url)
  }


}
