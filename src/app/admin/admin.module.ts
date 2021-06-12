import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { SnacksComponent } from './snacks/snacks.component';
import { FruitsVegetablesComponent } from './fruits-vegetables/fruits-vegetables.component';
import { ViewproductsComponent } from './viewproducts/viewproducts.component';
import { EditproductsComponent } from './editproducts/editproducts.component';
import { NewproductComponent } from './newproduct/newproduct.component';
import { NgxPaginationModule } from 'ngx-pagination'
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AdminComponent,
    HomeComponent,
    UsersComponent,
    SnacksComponent,
    FruitsVegetablesComponent,
    ViewproductsComponent,
    EditproductsComponent,
    NewproductComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    NgxPaginationModule,
    SharedModule
  ]
})
export class AdminModule { }
