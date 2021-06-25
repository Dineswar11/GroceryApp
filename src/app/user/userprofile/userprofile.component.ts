import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  constructor(private UserService:UserService) { }

  UserDetails;

  file:File;

  ngOnInit(): void {
    let username = localStorage.getItem('username')
    this.UserService.getUserDetailsByName(username).subscribe(
      res=>{
        this.UserDetails = res['message']
      },
      err=>{
        console.log(err.message)
      }
    )
  }

  selectFile(event){
    this.file = event.target.files[0]
  }

  updateProfilePic(ref){
    let formData = new FormData();
    
    formData.append('profilePic',this.file,this.file.name)

    formData.append('userDetails',JSON.stringify(this.UserDetails))

    console.log(formData.get('userDetails'))

    this.UserService.updateProfilePic(formData).subscribe(
      res=>{
        alert(res['message'])
      },
      err=>{
        console.log(err)
      }
    )
  }

}
