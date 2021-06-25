import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { UpdateuserprofileComponent } from './updateuserprofile/updateuserprofile.component';


@NgModule({
  declarations: [
    UserComponent,
    UserprofileComponent,
    UpdateuserprofileComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule
  ]
})
export class UserModule { }
