import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IngresosRoutingModule } from './ingresos-routing.module';
import { IngresosComponent } from './componentes/ingresos/ingresos.component';
import { NewingresoComponent } from './componentes/newingreso/newingreso.component';


@NgModule({
  declarations: [IngresosComponent, NewingresoComponent],
  imports: [
    CommonModule,
    IngresosRoutingModule
  ]
})
export class IngresosModule { }
