import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IngresosComponent } from './componentes/ingresos/ingresos.component';
import { NewingresoComponent } from './componentes/newingreso/newingreso.component';


const routes: Routes = [
  {
    path:'',
    component:IngresosComponent
  },
  {
    path:'new',
    component:NewingresoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IngresosRoutingModule { }
