import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/parts/header/header.component';
import { FooterComponent } from './components/parts/footer/footer.component';
import { HomeComponent } from './components/pages/home/home.component';
import { NewsComponent } from './components/pages/news/news.component';
import { AddPostComponent } from './components/pages/add-post/add-post.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { SearchComponent } from './components/parts/search/search.component';
import { PostComponent } from './components/pages/post/post.component';
import { AuthComponent } from './components/pages/auth/auth.component';
import { RegComponent } from './components/pages/reg/reg.component';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NewsComponent,
    AddPostComponent,
    ErrorComponent,
    ProfileComponent,
    SearchComponent,
    PostComponent,
    AuthComponent,
    RegComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
