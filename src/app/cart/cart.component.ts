import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { hinge, opacity, slideright } from '../animation';
import { AddtocartService } from '../Services/addtocart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  animations:[opacity,slideright,hinge]
})
export class CartComponent implements OnInit {

  productsAddedToCart:any;

  constructor(private CartDS:AddtocartService) { }
  ngOnInit(): void {
    this.productsAddedToCart = (this.CartDS.getTheProductsInCart())
    console.log(this.productsAddedToCart)
  }

  deleteItem(ind){
    this.CartDS.deleteProductFromCart(ind);
  }
  
}


