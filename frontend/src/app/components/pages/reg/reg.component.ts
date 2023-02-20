import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ValidationService } from 'src/app/services/validation.service';


@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.scss']
})
export class RegComponent implements OnInit{
  constructor(
    private validate: ValidationService,
    private auth: AuthService,
    private router: Router
    ){}

  username:string
  password:string
  imageURL:string
  imageIsEmpty:boolean = true

  ngOnInit(){
  }
  inputChange(){
    if(this.imageURL == null || this.imageURL.trim() == ""){
      this.imageIsEmpty = true
    } else {
      this.imageIsEmpty = false
    }
  }
  submit(){
    const user = {
      username: this.username,
      password: this.password,
      imageURL: this.imageURL || "../../../assets/user.png"
    }
    if(!this.validate.validateRegister(user)){
      console.log("Fill all of the fields")
      //make beautifull later
      alert("Fill all of the fields")
    } else {
      this.auth.registerUser(user).subscribe((data:string) => {
        let temp = JSON.parse(data)
        if(temp.success){ 
          console.log("User was added")
          this.router.navigate(["/users/auth"])
        } else {
          console.log("User registration error")
          this.router.navigate(["/users/register"])
        }
      })
    }

  }
}
