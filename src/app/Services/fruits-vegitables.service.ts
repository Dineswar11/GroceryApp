import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import {from, Observable } from 'rxjs';
import{fruitsvegitablesArr} from '../Models/fruits-vegitables.model';


@Injectable({
  providedIn: 'root'
})
export class FruitsVegitablesService {

  constructor(private hc:HttpClient) { }

  getFruitsAndVegitables():Observable<fruitsvegitablesArr[]>{
    return this.hc.get<fruitsvegitablesArr[]>('http://localhost:3000/fruits/getfruits')
  }
  
  getSpecificFruitsAndVegitablesData(id):Observable<fruitsvegitablesArr>{
    return this.hc.get<fruitsvegitablesArr>('http://localhost:3000/fruits/getfruits/'+id)
  }

  updateFruitsdetails(Product):Observable<any>{
    return this.hc.put("http://localhost:3000/fruits/updatefruits/"+Product.id,Product)
  }

  delete(id){
    return this.hc.delete("http://localhost:3000/fruits/deletefruits/"+id)
  }

  createNewFruitsProduct(newProduct){
    return this.hc.post("http://localhost:3000/fruits/createfruits",newProduct)
  }

}
