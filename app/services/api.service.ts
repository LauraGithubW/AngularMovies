import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, map, catchError, throwError } from 'rxjs';
import { ApiNameSpace } from '../models/api.model';
@Injectable({
  providedIn: 'root'
})
export class ApiService<T> {

  constructor(private http: HttpClient) { 
   
  }
  postService(paramsReq: ApiNameSpace.Params ): Observable<T> {
    const headers= new HttpHeaders({
      accept: 'application/json',
      'content-type': 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OWFmMmM1ZTVhZGNmNDdiNGQwOGI0MmE5OWJlZTc0OSIsInN1YiI6IjY0YzM4NDkxMDI4ZjE0MDBlZTlkNmE0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rH075zHwoH8RYMWN2oDHZpc5yzShsqFuNHLuF75GCgk'
    });
    const {url, params, body} = paramsReq;
    const options = {
      headers,
      params
    }
      return this.http.post<T>(url,body,options).pipe(map(res => res),catchError(this.handlerError));
  }
  getService(paramsReq: ApiNameSpace.Params ): Observable<T> {
    const headers= new HttpHeaders({
      accept: 'application/json',
      'content-type': 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OWFmMmM1ZTVhZGNmNDdiNGQwOGI0MmE5OWJlZTc0OSIsInN1YiI6IjY0YzM4NDkxMDI4ZjE0MDBlZTlkNmE0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rH075zHwoH8RYMWN2oDHZpc5yzShsqFuNHLuF75GCgk'
    });
    const {url, params} = paramsReq;
    const options = {
      headers,
      params
    }
      return this.http.get<T>(url,options).pipe(map(res => res),catchError(this.handlerError));
  }
  private handlerError(err: HttpErrorResponse){
    console.log(err.error);
    return  throwError(()=>err);
  }
}
