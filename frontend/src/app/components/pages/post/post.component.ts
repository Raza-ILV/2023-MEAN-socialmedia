import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from 'src/app/services/news.service';
import { News } from 'src/app/shared/models/News';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  post!: News
  constructor(
    private activatedRout: ActivatedRoute,
    private newsService:NewsService
  ){
    activatedRout.params.subscribe((params) => {
      if(params.id){
        this.post = newsService.getById(params.id)
      }
    })
  }
}
