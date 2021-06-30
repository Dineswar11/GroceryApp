import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddtocartService {

  productsAddedToCart: any[] = []

  constructor() { }

  updateProductsIncart(productsAddedToCart){
    localStorage.setItem('ItemsinCart', JSON.stringify(productsAddedToCart))
  }

  newProductAddedToCart(newProduct) {
    if (this.productsAddedToCart.length >= 1) {
      let ind = this.productsAddedToCart.findIndex(userObj => userObj.name === newProduct.name)
      if (ind == -1) {
        this.productsAddedToCart.push(newProduct);
        this.updateProductsIncart(this.productsAddedToCart);
        return true
      }
      else return false
    }
    else{
      this.productsAddedToCart.push(newProduct);
      this.updateProductsIncart(this.productsAddedToCart);
      return true
    }
  }
  deleteProductFromCart(index) {
    this.productsAddedToCart = JSON.parse(localStorage.getItem("ItemsinCart"))
    this.productsAddedToCart.splice(index, 1);
    this.updateProductsIncart(this.productsAddedToCart);
  }

  getTheProductsInCart() {
    return this.productsAddedToCart;
  }

  getNumberofProductsInCart() {
    return this.productsAddedToCart.length
  }
}
