import { Component } from '@angular/core';
import { ApiNameSpace } from 'src/app/models/api.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-base',
  template: `
  `,
  
})
export class BaseComponent <T extends any> {
  loading: boolean = true;
  paramsConfig: ApiNameSpace.Params = {
    url: '',
    params: {},
    body: {}
  }
  responseService: any;
  constructor(
    private readonly apiService: ApiService <T>,
  ){

  }
  getRequest() : void {
    this.apiService.getService(this.paramsConfig).subscribe({
      next: response => {
        console.log(response)
        this.responseService = response;
      },
      error: () => {},
      complete: () => {}
    })
  }
  postRequest() : void {
    this.apiService.postService(this.paramsConfig).subscribe({
      next: response => {
        console.log(response)
        this.responseService = response;
        this.loading = false;
      },
      error: () => {},
      complete: () => {}
    })
  }

}
