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

  getingresos(){
  
    return this.http.get("http://localhost:3000/ingresos/get")
  }
  gethabitaciones(){
      return this.http.get("http://localhost:3000/habitaciones/get")
  }
   salida(salida){
     return this.http.put("http://localhost:3000/ingresos/salida",salida).toPromise()
   }

  
}
