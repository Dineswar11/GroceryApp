import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginsatusService {

  constructor() { }

  loginStatus():boolean{
    if(localStorage.getItem("username")==null){
      return false;
    }
    else{
      return true;
    }
  }

  logout(){
    localStorage.clear();
  }
}
