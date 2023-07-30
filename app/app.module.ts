import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './module/login/login/login.component';
import { BaseComponent } from './shared/base/base.component';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule} from '@angular/common/http';
import { CardModule } from 'primeng/card';
import { MoviesComponent } from './module/movies/movies.component';
import { TagModule } from 'primeng/tag';
import { MovieDetailComponent } from './module/movies/movie-detail/movie-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BaseComponent,
    MoviesComponent,
    MovieDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    CardModule,
    FormsModule,
    TagModule,
    PasswordModule,
    ButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
 
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
