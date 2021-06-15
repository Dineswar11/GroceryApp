import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddtocartService {

  productsAddedToCart: any[] = []

  constructor() { }

  newProductAddedToCart(newProduct) {
    if (this.productsAddedToCart.length >= 1) {
      let ind = this.productsAddedToCart.findIndex(userObj => userObj.name === newProduct.name)
      if (ind == -1) {
        this.productsAddedToCart.push(newProduct)
        return true
      }
      else return false
    }
    else this.productsAddedToCart.push(newProduct); return true
    //window.location.reload();
  }

  deleteProductFromCart(index) {
    this.productsAddedToCart.splice(index, 1)
  }

  getTheProductsInCart() {
    return this.productsAddedToCart;
  }

  getNumberofProductsInCart() {
    return this.productsAddedToCart.length
  }
}
