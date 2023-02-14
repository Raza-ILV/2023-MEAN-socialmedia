import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  search:string = ''
  constructor(private activatedRoute: ActivatedRoute, private router: Router){
    activatedRoute.params.subscribe((params) => {
      if(params.search){
        this.search = params.search
      }
    })
  }
  find(search:string){
    if(search){
      this.router.navigateByUrl("/search/" + search)
    } else{
      this.router.navigateByUrl("/news" + search)
    }
  }
}
