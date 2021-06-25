import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { UpdateuserprofileComponent } from './updateuserprofile/updateuserprofile.component';
import { UserprofileComponent } from './userprofile/userprofile.component';

const routes: Routes = [{
  path: '', component: UserComponent, children: [
    { path: 'userprofile', component: UserprofileComponent },
    { path: 'updateuserprofile', component: UpdateuserprofileComponent },
    { path: '', redirectTo: 'userprofile', pathMatch: 'full' }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
