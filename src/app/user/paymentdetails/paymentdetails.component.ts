import { Component, OnInit } from '@angular/core';
import { paymentDetails } from 'src/app/Models/userDetails.model';

@Component({
  selector: 'app-paymentdetails',
  templateUrl: './paymentdetails.component.html',
  styleUrls: ['./paymentdetails.component.css']
})
export class PaymentdetailsComponent implements OnInit {

  paymentDetails = new paymentDetails(false,false,'','','','')

  newpayment:boolean;

  constructor() { }

  ngOnInit(): void {
    let userInfo = JSON.parse(localStorage.getItem('userObj'))
    if(userInfo.paymentdetails){
      this.newpayment = false
    }
    else this.newpayment = true
  }

  addPaymentDetails(ref){
    console.log(this.paymentDetails)
  }

}
