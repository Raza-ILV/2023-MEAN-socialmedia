import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from './components/pages/add-post/add-post.component';
import { AuthComponent } from './components/pages/auth/auth.component';
import { HomeComponent } from './components/pages/home/home.component';
import { NewsComponent } from './components/pages/news/news.component';
import { PostComponent } from './components/pages/post/post.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { RegComponent } from './components/pages/reg/reg.component';
import { AuthGuard } from './guards/auth.guard';
import { LogOutGuard } from './guards/log-out.guard';

const routes: Routes = [
  {path: "", redirectTo: "news", pathMatch: "full"},
  {path: "home", redirectTo: "news", pathMatch: "full"},
  {path: "news", component: NewsComponent, canActivate: [AuthGuard]},
  {path: "news/add-post", component: AddPostComponent, canActivate: [AuthGuard]},
  {path: "news/:id", component: PostComponent, canActivate: [AuthGuard]},
  {path: "users/profile", component: ProfileComponent, canActivate: [AuthGuard]},
  {path: "users/auth", component: AuthComponent, canActivate: [LogOutGuard]},
  {path: "users/register", component: RegComponent, canActivate: [LogOutGuard]},
  {path: "**", component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
