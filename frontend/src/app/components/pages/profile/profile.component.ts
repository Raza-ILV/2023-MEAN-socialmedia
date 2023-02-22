import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{
  user:any

  constructor(private auth: AuthService, private router: Router){}

  ngOnInit(){
    this.user = this.auth.getProfile().subscribe({
      next: (data) => {this.user = JSON.parse(data)},
      error: (err) => {console.log(err)},
    })
  }
}
