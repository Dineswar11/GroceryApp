import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { slideleft, slideright } from '../animation';
import { registerclass } from '../Models/register.model';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  animations: [slideleft, slideright]
})
export class RegisterComponent implements OnInit {

  registerDetails = new registerclass('', '', '', '')

  showPassword: boolean = true;

  constructor(private userService: UserService, private Router: Router,private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  addRegisterDetails() {
    let newUserDetails = {
      username: this.registerDetails.username,
      email: this.registerDetails.email,
      password: this.registerDetails.password
    }
    this.userService.register(newUserDetails).subscribe(
      res => {
        if (res.message === 'User created') {
          this.toastr.success('New User Created.')
          this.Router.navigateByUrl('/login')
        }
        else this.toastr.error(res.message)
      },
      err => {
        console.log(err)
        alert("Something went wrong...")
      }
    )
  }
}