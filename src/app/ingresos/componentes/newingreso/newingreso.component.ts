import { Component, OnInit } from '@angular/core';
import { Ingreso } from '../../clases/ingreso';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-newingreso',
  templateUrl: './newingreso.component.html',
  styleUrls: ['./newingreso.component.css']
})
export class NewingresoComponent implements OnInit {

  ingreso=new Ingreso()
  errorinput:boolean=false;
  constructor() { }

  ngOnInit() {
  }

  onSubmit(form:FormGroup){
    console.log(form);
    
    if(form.valid){
      console.log(this.ingreso);
      
    }
    else{
      this.errorinput=!this.errorinput
    }

  }

}
