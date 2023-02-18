import { Injectable } from '@angular/core';

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
  
}
