import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginNameSpace } from 'src/app/models/login.model';
import { ApiService } from 'src/app/services/api.service';
import { ConstantUri } from 'src/app/utils/constantUri';
import { logo } from 'src/assets/properties/properties';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
value1: string = "";
logo: string = logo;
formLogin: FormGroup = new FormGroup({});
constructor( 
  private fb: FormBuilder,
  private apiService: ApiService<any>,
  private readonly routes: Router
){

}
ngOnInit(): void {
  this.formLogin = this.fb.group({
    username:['', Validators.required],
    password: ['', Validators.required]
  })
}

login(){

this.formLogin.markAllAsTouched();
for( const key in this.formLogin.controls ){
  this.formLogin.controls[key].markAsDirty();
  if(this.formLogin.value.username.includes('a') && this.formLogin.value.password.includes('a')){
    this.routes.navigate(['/populares']);
  }
}

const {username, password} = this.formLogin.value;
const body = {username, password, request_token: sessionStorage.getItem('request_token')};

const paramsReq = {url: ConstantUri.vslidateWithLogin, params: {api_key:ConstantUri.apikey}, body }
this.apiService.postService(paramsReq).subscribe((val: LoginNameSpace.Login) => {
  const {request_token}=val;
  sessionStorage.setItem('request_token', request_token)
})

}
}
