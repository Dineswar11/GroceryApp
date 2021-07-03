import { Injectable } from '@angular/core';
import {  CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginsatusService } from './Services/loginsatus.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {

  constructor(private router:Router,private LoginService:LoginsatusService){}

  canActivate():boolean{
    if(this.LoginService.loginStatus() === 2){
      return true
    }
    else this.router.navigateByUrl('login'); return false 
  }
  
}
