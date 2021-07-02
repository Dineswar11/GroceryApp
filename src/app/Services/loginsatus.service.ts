import { Injectable } from '@angular/core';
import { AddtocartService } from './addtocart.service';

@Injectable({
  providedIn: 'root'
})
export class LoginsatusService {

  constructor(private CartDs:AddtocartService) { }

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
    let itemsInCart = this.CartDs.productsAddedToCart;
    localStorage.setItem('ItemsinCart',JSON.stringify(itemsInCart))
    this.CartDs.updateObservable(itemsInCart)
  }
}
