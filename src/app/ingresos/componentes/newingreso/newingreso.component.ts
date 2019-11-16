import { Component, OnInit } from '@angular/core';
import { IngresoService } from '../../servicios/ingreso.service';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-newingreso',
  templateUrl: './newingreso.component.html',
  styleUrls: ['./newingreso.component.css']
})
export class NewingresoComponent implements OnInit {
  
  habitacion:string;
  estado:string;
  habitaciones:any=[]
  salida: Subject<object> = new Subject<object>();

  
  constructor(public ingresoService:IngresoService) { }

  ngOnInit() {
  
    this.ingresoService.gethabitaciones().subscribe((data:any)=>{
       console.log(data);
       this.habitaciones=data

    })
  }
  updateEstado(event){
    this.habitaciones
        .forEach(item => item.habitacion==event.habitacion ? item.estado = event.estado : null);
  }
  modal(habitacion,estado){
    this.habitacion=habitacion
    this.estado=estado
   
    
  }
  salidaEvent(habitacion,estadoactual) {
     let tipo;
     if(estadoactual=='ocupado')tipo = "ingresos"
     if(estadoactual=='reservado')tipo = "reservas"

    this.salida.next({habitacion,estadoactual,tipo});
 
  }
  
}
