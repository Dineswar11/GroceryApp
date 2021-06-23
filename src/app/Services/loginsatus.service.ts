import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginsatusService {

  constructor() { }

  loginStatus():number{
    if(localStorage.getItem("username")==null){
      return 0;
    }
    else if(localStorage.getItem('username')==='Admin'){
      return 1;
    }
    else{
      return 2
    }
  }

  logout(){
    localStorage.clear();
  }
}
