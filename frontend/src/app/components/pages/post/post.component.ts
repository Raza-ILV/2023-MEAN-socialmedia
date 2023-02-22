import { Component } from '@angular/core';
import { News } from 'src/app/shared/models/News';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  post!: News
  constructor(){}
}
