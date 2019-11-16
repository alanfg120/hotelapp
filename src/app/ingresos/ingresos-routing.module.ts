import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IngresosComponent } from './componentes/ingresos/ingresos.component';
import { NewingresoComponent } from './componentes/newingreso/newingreso.component';
import { ReservasComponent } from './componentes/reservas/reservas.component';


const routes: Routes = [
  {
    path:'ingresos',
    component:IngresosComponent
  },
  {
    path:'',
    component:NewingresoComponent
  },
  {
    path:'reservas',
    component:ReservasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IngresosRoutingModule { }
