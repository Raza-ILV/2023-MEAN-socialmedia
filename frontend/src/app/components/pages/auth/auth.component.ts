import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ValidationService } from 'src/app/services/validation.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent{
  constructor(
    private validate: ValidationService,
    private auth: AuthService,
    private router: Router
    ){}
  username: string
  password: string

  submit(){
    let user = {
      username: this.username,
      password: this.password
    }
    if(!this.validate.validateAuth(user)){
      // redesign later 
      alert("Fill all of the fields")
    } else {
      this.auth.authUser(user).subscribe((data:string) => {
        let temp = JSON.parse(data)
        if(temp.success){
          this.auth.storeUserData(temp.token, temp.user)
          this.router.navigate(["/news"]).then(() => {
            location.reload()
          })
        } else {
          // redesign later 
          alert("Wrong data")
        }
      })
    } 
  }
}
