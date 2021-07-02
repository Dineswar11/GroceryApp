import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddtocartService {

  productsAddedToCart: any[] = []

  cartDetails;

  constructor(private httpClient: HttpClient) { }

  dataSource = new BehaviorSubject<any>(0);

  dataObservable = this.dataSource.asObservable();

  updateObservable(data) {
    this.dataSource.next(data)
  }

  async updateProductsIncart(productsAddedToCart) {
    localStorage.setItem('ItemsinCart', JSON.stringify(productsAddedToCart))
    if (localStorage.getItem("username")) {
      await this.getProductsAfterLogin().subscribe(
        res => {
          this.cartDetails = res['message']
        },
        err => {

        }
      )
      this.cartDetails.cartObj = productsAddedToCart
      this.updateCartInDB(this.cartDetails).subscribe(
        res => { },
        err => { }
      )
    }
  }

  newProductAddedToCart(newProduct) {
    this.productsAddedToCart = JSON.parse(localStorage.getItem("ItemsinCart"))
    if (this.productsAddedToCart.length >= 1) {
      let ind = this.productsAddedToCart.findIndex(userObj => userObj.name === newProduct.name)
      if (ind == -1) {
        this.productsAddedToCart.push(newProduct);
        this.updateProductsIncart(this.productsAddedToCart);
        this.updateObservable(this.productsAddedToCart);
        return true
      }
      else {
        this.productsAddedToCart[ind].quantity = this.productsAddedToCart[ind].quantity + 1;
        this.updateProductsIncart(this.productsAddedToCart);
        return false
      }
    }
    else {
      this.productsAddedToCart.push(newProduct);
      this.updateProductsIncart(this.productsAddedToCart);
      this.updateObservable(this.productsAddedToCart);
      return true
    }
  }

  updateQuantity(ind, add) {
    this.productsAddedToCart = JSON.parse(localStorage.getItem("ItemsinCart"))
    if (add === 'a') {
      this.productsAddedToCart[ind].quantity = this.productsAddedToCart[ind].quantity + 1;
    }
    else {
      this.productsAddedToCart[ind].quantity = this.productsAddedToCart[ind].quantity - 1;
    }
    this.updateProductsIncart(this.productsAddedToCart);
  }

  deleteProductFromCart(index) {
    this.productsAddedToCart = JSON.parse(localStorage.getItem("ItemsinCart"))
    this.productsAddedToCart.splice(index, 1);
    this.updateProductsIncart(this.productsAddedToCart);
    this.updateObservable(this.productsAddedToCart);
  }

  getTheProductsInCart() {
    return this.productsAddedToCart;
  }

  getProductsAfterLogin() {
    let username = localStorage.getItem('username')
    return this.httpClient.get('http://localhost:3000/cart/getcartitems/' + username)
  }

  getNumberofProductsInCart() {
    return this.productsAddedToCart.length
  }

  updateCartInDB(cartDetails) {
    let username = localStorage.getItem("username")
    return this.httpClient.put('http://localhost:3000/cart/updatecartobj/' + username, cartDetails)
  }

  createCartinDB(username) {
    let newObj = {
      "username": username,
      "cartObj": []
    }
    return this.httpClient.post('http://localhost:3000/cart/createcartobj', newObj)
  }
}
