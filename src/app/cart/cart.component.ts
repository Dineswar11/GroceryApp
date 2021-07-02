import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { hinge, opacity, slideright } from '../animation';
import { AddtocartService } from '../Services/addtocart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  animations: [opacity, slideright, hinge]
})
export class CartComponent implements OnInit {

  productsAddedToCart = [];

  sum: number = 0;

  constructor(private CartDS: AddtocartService, private toastr: ToastrService) { }
  ngOnInit(): void {
    if (localStorage.getItem("username")) {
      this.CartDS.getProductsAfterLogin().subscribe(
        res => {
          this.productsAddedToCart = res['message'].cartObj
        },
        err => {
          console.log(err)
        }
      )
    }
    else {
      if (localStorage.getItem("ItemsinCart")) {
        this.productsAddedToCart = JSON.parse(localStorage.getItem("ItemsinCart"))
      }
      else this.productsAddedToCart = [];
    }
  }

  increaseQuantity(ind){
    this.CartDS.updateQuantity(ind,'a')
  }

  decreaseQuantity(ind){
    this.CartDS.updateQuantity(ind,'s')
  }

  deleteItem(product, ind) {
    this.CartDS.deleteProductFromCart(ind);
    this.toastr.error(product.name + ' Removed from the Cart 😓')
    this.ngOnInit()
  }

  totalPrice() {
    this.sum = 0;
    for (let products of this.productsAddedToCart) {
      this.sum = this.sum + (products.sale_price) * (products.quantity)
    }
    this.ngOnInit();
  }

}


