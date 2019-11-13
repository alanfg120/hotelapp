import { Component, OnInit } from '@angular/core';

import { FormGroup } from '@angular/forms';
import * as moment from "moment";
import { IngresoService } from '../../servicios/ingreso.service';


@Component({
  selector: 'app-newingreso',
  templateUrl: './newingreso.component.html',
  styleUrls: ['./newingreso.component.css']
})
export class NewingresoComponent implements OnInit {
  
  habitacion:string;
  estado:string;
  habitaciones:any=[]
  constructor(public ingresoService:IngresoService) { }

  ngOnInit() {
  
    this.ingresoService.gethabitaciones().subscribe((data:any)=>{
       console.log(data);
       
      this.habitaciones=data[0].habitaciones

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

}
