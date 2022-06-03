import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";


import {urls} from "../constants/urls";
import {IPost} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private HttpClient: HttpClient) {

  }

  getAll(): Observable<IPost[]> {
    return this.HttpClient.get<IPost[]>(urls.posts)
  }

  getById(id: string): Observable<IPost> {
    return this.HttpClient.get<IPost>(`${urls.posts}/${id}`)
  }
}
