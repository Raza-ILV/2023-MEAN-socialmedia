import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from './components/pages/add-post/add-post.component';
import { AuthComponent } from './components/pages/auth/auth.component';
import { HomeComponent } from './components/pages/home/home.component';
import { NewsComponent } from './components/pages/news/news.component';
import { PostComponent } from './components/pages/post/post.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { RegComponent } from './components/pages/reg/reg.component';

const routes: Routes = [
  {path: "", redirectTo: "home", pathMatch: "full"},
  {path: "home", component: HomeComponent},
  {path: "search/:search", component:NewsComponent},
  {path: "news", component: NewsComponent},
  {path: "news/add-post", component: AddPostComponent},
  {path: "news/:id", component: PostComponent},
  {path: "users/profile", component: ProfileComponent},
  {path: "users/auth", component: AuthComponent},
  {path: "users/register", component: RegComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
