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

  updateProfilePic(updateduserDetails){
    return this.Httpclient.put('http://localhost:3000/user/updateuserprofilepic/'+updateduserDetails.username,updateduserDetails)
  }

  updateUserDetails(updateduserDetails){
    console.log(updateduserDetails)
    return this.Httpclient.put('http://localhost:3000/user/updateuserdetails/'+updateduserDetails.username,updateduserDetails)
  }
}
