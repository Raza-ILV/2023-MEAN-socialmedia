import { Component, OnInit } from '@angular/core';
import { ValidationService } from 'src/app/services/validation.service';


@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.scss']
})
export class RegComponent implements OnInit{
  constructor(private validate: ValidationService){}

  username:string
  password:string
  imageURL:string
  imageIsEmpty:boolean = true

  ngOnInit(){
  }
  inputChange(){
    if(this.imageURL == null || this.imageURL.trim() == ""){
      console.log('s')
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
    }
  }
}
