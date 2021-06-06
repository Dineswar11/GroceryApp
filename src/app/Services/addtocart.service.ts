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

  deleteProductFromCart(index){
    this.productsAddedToCart.splice(index,1)
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

  getNumberofProductsInCart(){
    return this.productsAddedToCart.length
  }
}
