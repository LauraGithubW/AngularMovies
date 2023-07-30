import { NgModule } from '@angular/core';
import { MoviesRoutingModule } from './movies-routing.module';



import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { AppComponent } from 'src/app/app.component';

@NgModule({
  declarations: [
    
    
  
  ],
  imports: [
MoviesRoutingModule,
CardModule,
ButtonModule,
TagModule


  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class MoviesModule { }
