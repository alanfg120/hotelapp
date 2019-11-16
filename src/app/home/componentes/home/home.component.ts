import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/login/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  menu:any=[
 
    {
      titulo:"Habitaciones",
      icono:"hotel",
      ruta:"ingresos"
    },
    {
      titulo:"Ingresos",
      icono:"table_chart",
      ruta:"ingresos/ingresos"
    },
    {
      titulo:"Reservas",
      icono:"date_range",
      ruta:"ingresos/reservas"
    },
  ]

  constructor(public auth:AuthService) { }

  ngOnInit() {

  }
  
}
