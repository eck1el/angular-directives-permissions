import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowRolesStatusComponent } from './show-roles-status/show-roles-status.component';

const routes: Routes = [
  {path:'home', component:ShowRolesStatusComponent},
  {path:'', pathMatch:'full', redirectTo:'home'},
  {path:'**', pathMatch:'full', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
