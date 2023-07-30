import { Component } from '@angular/core';
import { ApiService } from './services/api.service';
import { ConstantUri } from './utils/constantUri';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movies';
  constructor(
    private apiService: ApiService<any>
  ){
    const getConfig ={url:ConstantUri.tokenUrl,params:{api_key:ConstantUri.apikey}}
    this.apiService.getService(getConfig).subscribe((val) => {
      const { request_token} = val;
      sessionStorage.setItem('request_token', request_token);
    
  });
   

  }
}
