import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { slideleft, slideright } from '../animation';
import { registerclass } from '../Models/register.model';
import { AddtocartService } from '../Services/addtocart.service';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  animations: [slideleft, slideright]
})
export class RegisterComponent implements OnInit {

  registerDetails = new registerclass('', '', '', '','https://res.cloudinary.com/dfkhzf4sw/image/upload/v1624444362/NicePng_gray-circle-png_1366211_kf1mxw.png','https://res.cloudinary.com/dfkhzf4sw/image/upload/v1624444346/DefaultHeader_wamkxs.jpg')

  showPassword: boolean = true;

  constructor(private userService: UserService, private Router: Router,private toastr:ToastrService,private CartDs:AddtocartService) { }

  ngOnInit(): void {
  }

  addRegisterDetails() {
    let newUserDetails = {
      username: this.registerDetails.username,
      email: this.registerDetails.email,
      password: this.registerDetails.password,
      profilePic : this.registerDetails.profilePic,
      headerPic : this.registerDetails.headerPic
    }
    this.userService.register(newUserDetails).subscribe(
      res => {
        if (res.message === 'User created') {
          this.toastr.success('New User Created.')
          this.Router.navigateByUrl('/login')
        }
        else {this.toastr.error(res.message)}
        this.CartDs.createCartinDB(this.registerDetails.username).subscribe(
          res=>{
            console.log(res)
          },
          err=>{
            console.log('err in creating cartObj',err)
          }
        )
      },
      err => {
        console.log(err)
        alert("Something went wrong...")
      }
    )
  }
}