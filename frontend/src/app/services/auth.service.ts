import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: any
  user: any
  baseURI = "http://localhost:3000"
  constructor(private http: HttpClient) { }

  registerUser(user:any){
    let headers = new HttpHeaders().set('Content-Type', 'application/json')
    return this.http
    .post(this.baseURI + "/users/register", user, {headers: headers})
    .pipe(map(res => {
      console.log(res)
      return JSON.stringify(res)
    }))
  }

  authUser(user:any){
    let headers = new HttpHeaders().set('Content-Type', 'application/json')
    return this.http
    .post(this.baseURI + "/users/auth", user, {headers: headers})
    .pipe(map(res => {
      console.log(res)
      return JSON.stringify(res)
    }))
  }

  getProfile(){
    let temp:any = localStorage.getItem("id_token")
    let headers = new HttpHeaders().set('Authorization', temp)
    return this.http
    .get(this.baseURI + "/users/profile", {headers: headers})
    .pipe(map(res => {
      console.log(res)
      return JSON.stringify(res)
    }))
  }

  storeUserData(token:string, user:any){
    localStorage.setItem("id_token", token)
    localStorage.setItem("user", JSON.stringify(user))
    this.authToken = token
    this.user = user
  }

  logOut(){
    this.authToken = null
    this.user = null
    localStorage.removeItem("user")
    localStorage.removeItem("id_token")
  }
}
