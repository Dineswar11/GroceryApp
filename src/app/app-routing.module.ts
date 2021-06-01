import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { FooterComponent } from './footer/footer.component';
import { FruitsVegitablesComponent } from './fruits-vegitables/fruits-vegitables.component';
import { HomeComponent } from './home/home.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SnacksComponent } from './snacks/snacks.component';

const routes: Routes = [
  {path:'cart',component:CartComponent},
  {path:'home',component:HomeComponent},
  {path:'snacks',component:SnacksComponent},
  {path:'product-card',component:ProductCardComponent},
  {path:'product-details',component:ProductDetailsComponent},
  {path:'fruits-vegitables',component:FruitsVegitablesComponent},
  {path:'footer',component:FooterComponent}


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
