import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IngresosRoutingModule } from './ingresos-routing.module';
import { IngresosComponent } from './componentes/ingresos/ingresos.component';
import { NewingresoComponent } from './componentes/newingreso/newingreso.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { BuscarPipe } from './pipes/buscar.pipe';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { ReservasComponent } from './componentes/reservas/reservas.component';


@NgModule({
  declarations: [IngresosComponent, NewingresoComponent, BuscarPipe, FormularioComponent, ReservasComponent],
  imports: [
    CommonModule,
    IngresosRoutingModule,
    FormsModule,
    HttpClientModule,
    ScrollingModule
  ]
})
export class IngresosModule { }
