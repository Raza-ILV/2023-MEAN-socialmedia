import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from './components/pages/add-post/add-post.component';
import { HomeComponent } from './components/pages/home/home.component';
import { NewsComponent } from './components/pages/news/news.component';
import { ProfileComponent } from './components/pages/profile/profile.component';

const routes: Routes = [
  {path: "", redirectTo: "home", pathMatch: "full"},
  {path: "home", component: HomeComponent},
  {path: "search/:search", component:NewsComponent},
  {path: "news", component: NewsComponent},
  {path: "add-post", component: AddPostComponent},
  {path: "profile", component: ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
