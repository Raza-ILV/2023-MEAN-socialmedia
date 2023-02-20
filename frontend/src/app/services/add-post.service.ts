import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddPostService {
  headers = new HttpHeaders().set("Content-Type", "application/json")
  baseURI = "http://localhost:3000"
  constructor(private http: HttpClient) { }

  addPost(post:any){ 
    return this.http
    .post(this.baseURI + "/news/add-post", post, {headers: this.headers})
    .pipe(map(res => (res as any).json))
  }
}
