import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddtocartService } from './Services/addtocart.service';
import { LoginsatusService } from './Services/loginsatus.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'GroceryApp';

  constructor(private CartDS: AddtocartService, public LoginDS: LoginsatusService, private Router: Router) { }

  productsInCart = []

  numberOfProductsAdded: number = 0;

  username = localStorage.getItem("username")

  ngOnInit() {
    if (localStorage.getItem("ItemsinCart")) {
      this.productsInCart = JSON.parse(localStorage.getItem("ItemsinCart"))
      this.CartDS.updateObservable(this.productsInCart)

      this.CartDS.dataObservable.subscribe(
        prodObj => {
          this.numberOfProductsAdded = prodObj.length
        }
      )
    }
    else {
      localStorage.setItem('ItemsinCart',JSON.stringify(this.productsInCart))
    }
  }

  navigate() {
    // this.Router.navigateByUrl('/userprofile/'+this.username)
    this.Router.navigateByUrl('/user')
  }
}
