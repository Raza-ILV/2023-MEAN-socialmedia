import { Component } from '@angular/core';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent {
  post = {
    title: "",
    article: "",
    postImage: "https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg"
  }
}
