import { Conditional } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { slideleft, slideright } from '../animation';
import { userDetails } from '../Models/user.model';
import { AddtocartService } from '../Services/addtocart.service';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [slideleft, slideright]
})
export class LoginComponent implements OnInit {

  showPassword: boolean = true;

  userDetails = new userDetails('', '');

  itemsInCart;

  constructor(private router: Router, private UserService: UserService, private CartDs: AddtocartService) { }

  ngOnInit(): void {
  }

  validateDetails() {
    this.UserService.login(this.userDetails).subscribe(
      res => {
        if (res.message === 'login success') {
          console.log(res.username)
          localStorage.setItem("token", res.token)
          localStorage.setItem('username', res.username)
          localStorage.setItem("userObj", JSON.stringify(res.userObj))
          if (localStorage.getItem('username') === 'Admin') {
            this.router.navigateByUrl('/admin')
          }
          else {
            this.router.navigateByUrl('/user')
            this.CartDs.getProductsAfterLogin().subscribe(
              res => {
                this.itemsInCart = res['message'].cartObj
                localStorage.setItem("ItemsinCart", JSON.stringify(this.itemsInCart))
                this.CartDs.updateObservable(this.itemsInCart)
              }
            )
          }
        }
        else alert(res.message)
      },
      err => {
        console.log(err)
        alert('something went wrong..')
      }
    )
  }

}
