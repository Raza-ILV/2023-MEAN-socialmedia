import { Component } from '@angular/core';
import { ValidationService } from 'src/app/services/validation.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent {
  constructor(private validation: ValidationService){}
  title: string
  article: string
  postImage: string
  submit(){
    const post = {
      title: this.title,
      article: this.article,
      postImage: this.postImage
    }
    if(!this.validation.validateAddPost(post)){
      // Make beautifull then
      alert("Fill all of the fields")
      console.log("title: " + post.title)
      console.log("article: " + post.article)
    }
  }
}
