import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieModel } from 'src/app/models/movie.model';
import { ApiService } from 'src/app/services/api.service';
import { ConstantUri } from 'src/app/utils/constantUri';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit{
item!: MovieModel.Movie;
readonly imgBaseUrl = ConstantUri.pathImg;
constructor(
  private readonly apiService: ApiService<any>,
  private readonly activeRoute: ActivatedRoute,
  private readonly router: Router
){}
ngOnInit(): void {
  this.activeRoute.params.subscribe((val:any)=>{
    this.getMoviesList(val.id);
  })
}
private getMoviesList(movieId: string){
const getConfig = {url: ConstantUri.movieDetail + '/' + movieId, params: {api_key: ConstantUri.apikey}}
  this.apiService.getService(getConfig).subscribe((val)=>{
    this.item = val;
  })
}
goBack(){
  this.router.navigate(['/populares'])
}

}
