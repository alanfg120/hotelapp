import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IngresosRoutingModule } from './ingresos-routing.module';
import { IngresosComponent } from './componentes/ingresos/ingresos.component';
import { NewingresoComponent } from './componentes/newingreso/newingreso.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [IngresosComponent, NewingresoComponent],
  imports: [
    CommonModule,
    IngresosRoutingModule,
    FormsModule
  ]
})
export class IngresosModule { }
