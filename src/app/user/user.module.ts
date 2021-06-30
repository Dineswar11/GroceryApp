import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { UpdateuserprofileComponent } from './updateuserprofile/updateuserprofile.component';
import { SharedModule } from '../shared/shared.module';
import { PaymentdetailsComponent } from './paymentdetails/paymentdetails.component';
import { OrdersComponent } from './orders/orders.component';


@NgModule({
  declarations: [
    UserComponent,
    UserprofileComponent,
    UpdateuserprofileComponent,
    PaymentdetailsComponent,
    OrdersComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class UserModule { }
