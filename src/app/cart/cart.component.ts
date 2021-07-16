import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  sumAfterDisc : number;
  
  validPromo : boolean;

  discount : number;

  minimunOrder : boolean;

  couponDetails;

  constructor(private CartDS: AddtocartService, private toastr: ToastrService,private router:Router) { }
  ngOnInit(): void {
    this.CartDS.dataObservable.subscribe(
      res=>{
        this.sum = 0;
          if(this.validPromo){
            for(let products of res){
            this.sum = this.sum + (products.sale_price) * (products.quantity)
            }
            if(this.sum < this.couponDetails.minimunOrder){
              this.minimunOrder = false
            }
            else{
              this.minimunOrder = true
              this.sumAfterDisc = (this.sum * (100-this.couponDetails.discount))/100
            }
          }
          else {
            for(let products of res){
              this.sum = this.sum + (products.sale_price) * (products.quantity)
              }
          }
        }
    )
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

  verfiyPromoCode(ref){
    this.CartDS.verifyPromo(ref.Promo).subscribe(
      res=>{
        if(res['message'].promoName){
          this.validPromo = true
          this.couponDetails = res['message']
          this.toastr.success('Promo applied :-)')
        }
        else {
          this.validPromo = false
          this.toastr.error('Promo seems to be invalid :-(')
        }
        this.ngOnInit()
      },
      err=>{
        console.log('error in getting promo')
      }
    )
  }

  navigateToCheckout(){
    if(localStorage.getItem("username")){
      this.router.navigateByUrl('checkout')
    }
    else{
      this.toastr.warning('Log in to continue')
      this.router.navigateByUrl('login')
    }
  }
}