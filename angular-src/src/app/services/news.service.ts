import { Injectable } from '@angular/core';
import { sample_news } from '../data';
import { News } from '../shared/models/News';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor() { }
  getAll():News[]{
    return sample_news
  }
  getBySearch(search: string){
    return this.getAll()
      .filter(post => post.title
        .toLowerCase()
        .includes(search
          .toLowerCase()))
  }
}
