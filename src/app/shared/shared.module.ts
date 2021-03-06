import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPipe } from '../pipes/search.pipe';
import { MinPricePipe } from '../pipes/min-price.pipe';
import { MaxPricePipe } from '../pipes/max-price.pipe';
import { FormsModule } from '@angular/forms';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';



@NgModule({
  declarations: [
    PagenotfoundComponent,
    SearchPipe,
    MaxPricePipe,
    MinPricePipe,
  ],
  exports:[
    SearchPipe,
    MaxPricePipe,
    MinPricePipe,
    FormsModule,
    PagenotfoundComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }
