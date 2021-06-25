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
    return this.HttpClient.get<snacksArr[]>('http://localhost:3000/snacks/getsnacks');
  }

  getSnacksDataWithId(id):Observable<snacksArr>{
    return this.HttpClient.get<snacksArr>('http://localhost:3000/snacks/getsnacks/'+id)
  }

  updateSnacksdetails(Product):Observable<any>{
    console.log(Product)
    return this.HttpClient.put("http://localhost:3000/snacks/updateSnacks/"+Product.id,Product)
  }

  delete(id){
    return this.HttpClient.delete("http://localhost:3000/snacks/deletesnacks/"+id)
  }

  createNewSnacksProduct(newProduct){
    return this.HttpClient.post("http://localhost:3000/snacks/createsnacks",newProduct)
  }
}
