import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { EditproductsComponent } from './editproducts/editproducts.component';
import { FruitsVegetablesComponent } from './fruits-vegetables/fruits-vegetables.component';
import { HomeComponent } from './home/home.component';
import { NewproductComponent } from './newproduct/newproduct.component';
import { SnacksComponent } from './snacks/snacks.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:'',component:AdminComponent,children:[
    {path:'home',component:HomeComponent},
    {path:'showusers',component:UsersComponent},
    {path:'snacks',component:SnacksComponent},
    {path:'snacks/:id',component:EditproductsComponent},
    {path:'snacks_newproduct',component:NewproductComponent},
    {path:'fruits_vegetables',component:FruitsVegetablesComponent},
    {path:'fruits_vegetables/:id',component:EditproductsComponent},
    {path:'fruits_vegetables_newproduct',component:NewproductComponent},
    {path:'',redirectTo:'home',pathMatch:'full'}
  ]},
  ]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
