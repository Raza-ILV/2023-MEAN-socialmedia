import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  constructor(private theme: ThemeService){}
  themes:boolean = false
  ngOnInit(){
    console.log("Current theme: " + this.theme.initTheme())
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
}
