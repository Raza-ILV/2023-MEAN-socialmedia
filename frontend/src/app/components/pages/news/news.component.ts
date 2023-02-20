import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from 'src/app/services/news.service';
import { News } from 'src/app/shared/models/News';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent{

  news:News[] = []
  constructor(
    private newsService: NewsService,
    private activatedRoute: ActivatedRoute){
      activatedRoute.params.subscribe((params) => {
        if(params.search){
          this.news = this.newsService.getBySearch(params.search)
        } else {
          this.news = newsService.getAll()
        }
      })
  }

}
