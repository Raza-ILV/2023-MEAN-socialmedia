import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  
  constructor(
    private theme: ThemeService,
    private auth: AuthService,
    private router: Router
    ){}
  themes:boolean = false
  loggedIn:boolean = false
  ngOnInit(){
    console.log("Current theme: " + this.theme.initTheme())
    let temp = localStorage.getItem("id_token")
    if(temp){ this.loggedIn = true}
    else{ this.loggedIn = false}
  }
  setTheme(theme:string){
    this.theme.setTheme(theme)
  }
  showThemes(){
    if(this.themes){
      this.themes = false
    } else{
      this.themes = true
    }
  }
  logOut(){
    this.auth.logOut()
  }
}
