import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { FruitsVegitablesComponent } from './fruits-vegitables/fruits-vegitables.component';
import { HomeComponent } from './home/home.component';
import { SnacksComponent } from './snacks/snacks.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    FruitsVegitablesComponent,
    HomeComponent,
    SnacksComponent,
    ProductCardComponent,
    CartComponent,
    ProductDetailsComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 2500,
      positionClass: 'toast-bottom-left',
      preventDuplicates: false,
      progressBar:true,
      progressAnimation:'increasing',
      closeButton:true
    }),
    NgxPaginationModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
