import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
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

  sum:number=0;

  constructor(private CartDS:AddtocartService,private toastr:ToastrService) { }
  ngOnInit(): void {
    this.productsAddedToCart = this.CartDS.getTheProductsInCart()
  }

  deleteItem(product,ind){
    this.CartDS.deleteProductFromCart(ind);
    this.toastr.error(product.name+' Removed from the Cart 😓')
  }

  totalPrice(){
    this.sum=0;
    for(let products of this.productsAddedToCart){
      this.sum=this.sum+(products.sale_price)*(products.quantity)
    }
    console.log(this.sum)
  }
  
}


