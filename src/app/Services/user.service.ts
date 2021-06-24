import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private Httpclient:HttpClient) { }

  register(newUserDetail):Observable<any>{
    return this.Httpclient.post('http://localhost:3000/user/createuser',newUserDetail)
  }

  login(userDetails):Observable<any>{
    return this.Httpclient.post('http://localhost:3000/user/loginDetails',userDetails)
  }

  getUserDetails():Observable<any[]>{
    return this.Httpclient.get<any[]>('http://localhost:3000/user/getusers')
  }

  getUserDetailsByName(username):Observable<any>{
    return this.Httpclient.get<any>('http://localhost:3000/user/getuser/'+username)
  }
}
