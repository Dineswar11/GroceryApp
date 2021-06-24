import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  constructor(private UserService:UserService) { }

  UserDetails;

  ngOnInit(): void {
    let username = localStorage.getItem('username')
    this.UserService.getUserDetailsByName(username).subscribe(
      res=>{
        this.UserDetails = res['message']
        console.log(this.UserDetails)
      },
      err=>{
        console.log(err.message)
      }
    )
  }

}
