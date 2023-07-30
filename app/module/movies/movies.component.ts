import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesModel } from 'src/app/models/movies.model';
import { ApiService } from 'src/app/services/api.service';
import { ConstantUri } from 'src/app/utils/constantUri';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: MoviesModel.MoviesResponse = {
    page: 1,
    results: [],
    total_pages: 0,
    total_results:0
  };
  movieImg = ConstantUri.pathImg;
  constructor(
    protected apiService: ApiService<any>,
    private readonly router: Router
  ){
   
  }
ngOnInit(): void {
  const getConfig ={url:ConstantUri.popularMovies,params:{api_key:ConstantUri.apikey}}
  this.apiService.getService(getConfig).subscribe((val) => {
    const { request_token} = val;
    console.log(val);
    this.movies = val;
  
});
}

seeDetail(id:number){
  this.router.navigate([`populares/detalle/${id}`])
}
}

