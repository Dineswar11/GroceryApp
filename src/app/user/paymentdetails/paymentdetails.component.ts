import { Component, OnInit } from '@angular/core';
import { paymentDetails } from 'src/app/Models/userDetails.model';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-paymentdetails',
  templateUrl: './paymentdetails.component.html',
  styleUrls: ['./paymentdetails.component.css']
})
export class PaymentdetailsComponent implements OnInit {

  paymentDetails = new paymentDetails('','','','')

  newpayment:boolean;

  userInfo;

  paymentArray;

  constructor(private UserService:UserService) { }

  ngOnInit(): void {
    this.userInfo = JSON.parse(localStorage.getItem('userObj'))
    this.UserService.getUserDetailsByName(this.userInfo.username).subscribe(
      res=>{
        this.userInfo = res['message']
        localStorage.setItem("userObj",JSON.stringify(res['message']))
      },
      err=>{

      }
    )
    this.paymentArray = this.userInfo.paymentDetails
    if(this.paymentArray.length == 0 ){
      this.newpayment = true
    }
    else this.newpayment = false
  }

  addPaymentDetails(){
    this.userInfo.paymentDetails.push(this.paymentDetails)
    let updatedUserDetails = {
      username:this.userInfo.username,
      _id:this.userInfo._id,
      paymentDetails: this.userInfo.paymentDetails
    }
    this.UserService.updateUserDetails(updatedUserDetails).subscribe(
      res=>{
        alert(res['message'])
        this.ngOnInit()
      },
      err=>{

      }
    )
  }

}
