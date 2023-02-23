import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  post: any
  commentArticle:any
  headers = new HttpHeaders().set('Content-Type', 'application/json')
  baseURI = "http://localhost:3000"
  constructor(
    private http: HttpClient,
    private ar:ActivatedRoute
    ) {}

  getPost(){
    let id:string = this.ar.snapshot.params["id"]
    return this.http
    .get(this.baseURI + "/news/" + id, {headers: this.headers})
    .pipe(map(res => {
      console.log(res)
      return JSON.stringify(res)
    }))
  }


  ngOnInit(){
    this.post = this.getPost().subscribe({
      next: (data) => {this.post = JSON.parse(data).data},
      error: (err) => {console.log(err)},
      complete: () => {console.log("Post data has been fetched")},
    })
  }
  submit(){
    if(this.commentArticle.trim()){
      let id:string = this.ar.snapshot.params["id"]
      let temp:any = localStorage.getItem("user")
      let com:any = {comments: {
        author: JSON.parse(temp).username,
        img: JSON.parse(temp).imageURL,
        text: this.commentArticle
      }}
      console.log("data = ")
      console.log(com)

      return this.http
        .put(this.baseURI + "/news/" + id, com, {headers: this.headers})
        .pipe(map(res => {
          console.log(res)
          return JSON.stringify(res)
        })).subscribe({
          next: (data) => {this.post = JSON.parse(data).data},
          error: (err) => {console.log(err)},
          complete: () => {console.log("norm")}
        })
    } else {
      alert("Comments are empty")
      return false
    }
  }
}
