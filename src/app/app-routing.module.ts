import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginService } from './login/services/login.service';


const routes: Routes = [
  { path: "login",
    loadChildren: "./login/login.module#LoginModule" 
  },
  {
    path:"home",
    loadChildren: "./home/home.module#HomeModule" ,
    canActivate:[LoginService]
  },
  { path: "**", 
    loadChildren: "./login/login.module#LoginModule" 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
