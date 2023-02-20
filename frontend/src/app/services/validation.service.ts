import { Injectable } from '@angular/core';
import { News } from '../shared/models/News';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }

  validateRegister(user:any){
    if(!user.username || !user.password){
      return false
    } else {
      return true
    }
  }
  validateAddPost(post:any){
    if(!post.title || !post.article){
      return false
    } else {
      return true
    }
  }
  validateAuth(user:any){
    if(!user.username || !user.password){
      return false
    } else {
      return true
    }
  }
  
}
