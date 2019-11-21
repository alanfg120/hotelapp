import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ingreso } from '../clases/ingreso';

@Injectable({
  providedIn: 'root'
})
export class IngresoService {
   
  constructor(public http:HttpClient) { }

  newIngreso(ingreso){
    return this.http.post("http://localhost:3000/ingresos/new",ingreso).toPromise()
  }
  getingresos(tipo){
   return this.http.get(`http://localhost:3000/ingresos/get/${tipo}`)
  }
  gethabitaciones(){
      return this.http.get("http://localhost:3000/habitaciones/get")
  }
   salida(salida){
     return this.http.put("http://localhost:3000/ingresos/salida",salida).toPromise()
   }
   getingreso(query){
   
    return this.http.get(`http://localhost:3000/ingresos/get/${query.habitacion}/${query.tipo}`)
      
   }
    reserva(reserva){
     return this.http.put("http://localhost:3000/ingresos/reserva",reserva).toPromise()
   }
   updateIngreso(item){
       return this.http.put("http://localhost:3000/ingresos/update",item).toPromise()
   }
}

