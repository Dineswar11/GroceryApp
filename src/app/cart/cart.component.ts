import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { opacity, slideright } from '../animation';
import { AddtocartService } from '../Services/addtocart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  animations:[opacity,slideright]
})
export class CartComponent implements OnInit {

  productsAddedToCart:any;

  constructor(private CartDS:AddtocartService) { }
  ngOnInit(): void {
    this.productsAddedToCart = (this.CartDS.getTheProductsInCart())
    console.log(this.productsAddedToCart)
  }



  quantity:number = 1;
  
}


