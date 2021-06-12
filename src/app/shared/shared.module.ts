import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPipe } from '../pipes/search.pipe';
import { MinPricePipe } from '../pipes/min-price.pipe';
import { MaxPricePipe } from '../pipes/max-price.pipe';



@NgModule({
  declarations: [
    SearchPipe,
    MaxPricePipe,
    MinPricePipe
  ],
  exports:[
    SearchPipe,
    MaxPricePipe,
    MinPricePipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
