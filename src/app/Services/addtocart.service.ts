import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddtocartService {

  productsAddedToCart:any[]=[]

  show:boolean

  constructor() { }

  newProductAddedToCart(newProduct){
    this.productsAddedToCart.push(newProduct)    
  }

  //check(newProduct):boolean{
  //  for(let p of this.productsAddedToCart){
  //    if(p.name == newProduct.name){
  //      return true
  //    }
  //    else return false
  //  }

  //}

  getTheProductsInCart(){
    return this.productsAddedToCart;
  }
}
