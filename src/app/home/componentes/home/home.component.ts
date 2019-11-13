import { Component, OnInit } from '@angular/core';

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
      ruta:"ingresos/new"
    },
    {
      titulo:"Ingresos y Salidas",
      icono:"table_chart",
      ruta:"ingresos"
    },
    {
      titulo:"Salir",
      icono:"power_settings_new",
      ruta:"new"
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
