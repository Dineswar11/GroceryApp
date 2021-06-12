import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { snacksArr } from '../Models/snacks.model';

@Injectable({
  providedIn: 'root'
})
export class SnacksService {

  constructor(private HttpClient:HttpClient) { }

  getSnackData():Observable<snacksArr[]>{
    return this.HttpClient.get<snacksArr[]>('http://localhost:3000/snacks');
  }

  getSnacksDataWithId(id):Observable<snacksArr>{
    return this.HttpClient.get<snacksArr>('http://localhost:3000/snacks/'+id)
  }

  updateSnacksdetails(Product):Observable<any>{
    return this.HttpClient.put("http://localhost:3000/snacks/"+Product.id,Product)
  }

  delete(id){
    return this.HttpClient.delete("http://localhost:3000/snacks/"+id)
  }

  createNewSnacksProduct(newProduct){
    return this.HttpClient.post("http://localhost:3000/snacks",newProduct)
  }
}
