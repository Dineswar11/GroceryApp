import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-updateuserprofile',
  templateUrl: './updateuserprofile.component.html',
  styleUrls: ['./updateuserprofile.component.css']
})
export class UpdateuserprofileComponent implements OnInit {

  userDetails;

  constructor(private UserService:UserService) { }

  ngOnInit(): void {
    // this.userDetails = JSON.parse(localStorage.getItem("userObj"))
    let username = localStorage.getItem('username')
    this.UserService.getUserDetailsByName(username).subscribe(
      res=>{
        this.userDetails = res['message'];
      },
      err=>{
        console.log(err.message)
      }
    )
  }

}
