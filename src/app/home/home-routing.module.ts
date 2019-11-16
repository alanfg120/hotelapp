import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';


const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    children:[
      {
        path: "ingresos", 
        loadChildren: "./../ingresos/ingresos.module#IngresosModule" 
      },
      {
        path:"**",
        loadChildren: "./../ingresos/ingresos.module#IngresosModule" 
      }
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
