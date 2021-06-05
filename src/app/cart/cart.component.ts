import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { opacity } from '../animation';
import { AddtocartService } from '../Services/addtocart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  animations:[opacity]
})
export class CartComponent implements OnInit {

  productsAddedToCart:any;

  constructor(private CartDS:AddtocartService) { }
  ngOnInit(): void {
    this.productsAddedToCart = (this.CartDS.getTheProductsInCart())
    console.log(this.productsAddedToCart)
  }



  quantity:number = 1;
  saleprice:number= 50;
  
}


