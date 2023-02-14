import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  constructor(private router: Router) { }
  initTheme(){
    if(!localStorage.getItem("theme")){
      localStorage.setItem("theme", "dark")
    }
    return(localStorage.getItem("theme"))
  }
  setTheme(theme: string){
    localStorage.setItem("theme", theme) 
    location.reload()
  }

}
