import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { UpdateuserprofileComponent } from './updateuserprofile/updateuserprofile.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { PaymentdetailsComponent } from './paymentdetails/paymentdetails.component';
import { OrdersComponent } from './orders/orders.component';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';

const routes: Routes = [{
  path: '', component: UserComponent, children: [
    { path: 'userprofile', component: UserprofileComponent },
    { path: 'updateuserprofile', component: UpdateuserprofileComponent },
    { path: 'payment', component: PaymentdetailsComponent },
    { path: 'orders', component: OrdersComponent },
    { path: '', redirectTo: 'userprofile', pathMatch: 'full' },
    { path: '**', component: PagenotfoundComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
