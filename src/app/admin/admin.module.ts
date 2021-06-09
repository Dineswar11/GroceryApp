import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { SnacksComponent } from './snacks/snacks.component';
import { FruitsVegetablesComponent } from './fruits-vegetables/fruits-vegetables.component';
import { ViewproductsComponent } from './viewproducts/viewproducts.component';
import { EditproductsComponent } from './editproducts/editproducts.component';


@NgModule({
  declarations: [
    AdminComponent,
    HomeComponent,
    UsersComponent,
    UserdetailsComponent,
    SnacksComponent,
    FruitsVegetablesComponent,
    ViewproductsComponent,
    EditproductsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
