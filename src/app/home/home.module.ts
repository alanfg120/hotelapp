import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './componentes/home/home.component';
import { PasswordComponent } from './componentes/password/password.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [HomeComponent, PasswordComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule
  ]
})
export class HomeModule { }
