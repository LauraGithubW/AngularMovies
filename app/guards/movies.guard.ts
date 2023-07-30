import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, CanActivateFn, Router } from '@angular/router';


export class MoviesGuard implements CanActivate {
  constructor( private router: Router){
   
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
     return (sessionStorage.getItem('requestToken')) ? true : false;
    }
  
}

