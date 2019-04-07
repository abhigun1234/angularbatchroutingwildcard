import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutusComponent}  from '..//app/aboutus/aboutus.component'
import {LoginComponent} from '..//app/login/login.component'
import {PagenotfoungComponent} from '..//app/pagenotfoung/pagenotfoung.component'
 
const routes: Routes = [
  {path:'',component:AboutusComponent},{path:'aboutus',component:AboutusComponent}
,{path:'login',component:LoginComponent}
,{path:'**',component:PagenotfoungComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
