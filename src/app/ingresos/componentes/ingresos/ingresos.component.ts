import { Component, OnInit } from '@angular/core';
import { IngresoService } from '../../servicios/ingreso.service';
import { Ingreso } from '../../clases/ingreso';
import * as moment from "moment";
@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})
export class IngresosComponent implements OnInit {
  texto:string;
  loading:boolean;
  ingresos:Ingreso[];
  constructor(public ingresoService:IngresoService) { }

ngOnInit() {
    this.ingresoService.getingresos().subscribe((data:Ingreso[])=>{
          this.ingresos=data
          this.loading=!this.loading
    })
  }
 async salida(id,index){
      let salida={
          _id:id,
          fecha:moment().locale("es").format("L").toString()
      }
     let status:any =  await this.ingresoService.salida(salida)
     this.ingresos[index].fechaSalida=salida.fecha
     status.error ? alert("Ocurrio un Error") : alert("Se registro una Salida")

  }
}