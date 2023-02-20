import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AddPostService } from 'src/app/services/add-post.service';
import { ValidationService } from 'src/app/services/validation.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent {
  constructor(
    private validation: ValidationService,
    private addPost: AddPostService,
    private router: Router
  ){}
  title: string
  article: string
  postImage: string
  submit(){
    let temp:any = localStorage.getItem("user")
    let data = JSON.parse(temp)
    const post = {
      authorName: data.username,
      authorImage: data.imageURL,
      title: this.title,
      article: this.article,
      postImage: this.postImage
    }
    if(!this.validation.validateAddPost(post)){
      // Make beautifull then
      alert("Fill all of the fields")
      console.log("title: " + post.title)
      console.log("article: " + post.article)
    } else {
      this.addPost.addPost(post).subscribe((err) => {
        if(err){
          console.log("Post creation error")
          this.router.navigate(["/news/add-post"])
        } else {
          console.log("Post has been added")
          this.router.navigate(["/news"])
        }
      })
    }
  }
}
