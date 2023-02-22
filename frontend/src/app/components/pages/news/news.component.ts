import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit{

  news:any = []
  headers = new HttpHeaders().set('Content-Type', 'application/json')
  baseURI = "http://localhost:3000"
  constructor(private http: HttpClient) { }

  getNews(){
    return this.http
    .get(this.baseURI + "/news", {headers: this.headers})
    .pipe(map(res => {
      console.log(res)
      return JSON.stringify(res)
    }))
  }
  ngOnInit(){
    this.news = this.getNews().subscribe({
      next: (data) => {this.news = JSON.parse(data).posts},
      error: (err) => {console.log(err)},
      complete: () => {console.log("News data has been fetched")},
    })
  }


}
