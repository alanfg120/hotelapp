import { Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { IngresoService } from '../../servicios/ingreso.service';
import { FormGroup } from '@angular/forms';
import { Ingreso } from '../../clases/ingreso';
import * as moment from 'moment';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @Input() habitacion: string;
  @Input() estadoactual: string;
  @Output() estado = new EventEmitter();


  @ViewChild('closeModal',{static:false}) closeModal: ElementRef
  ingreso=new Ingreso()
  errorinput:boolean=false;
  constructor(public ingresoService:IngresoService) { 

    
  }

  ngOnInit() {
  
    
    
  }
  async onSubmit(form:FormGroup){

 
    if(form.valid){
   
       this.ingreso.fechaIngreso = moment().locale("es").format("L").toString();
       var color = Math.floor(0x1000000 * Math.random()).toString(16);
       this.ingreso.color=`solid 4px #${('000000' + color).slice(-6)}`
       this.ingreso.habitacion=this.habitacion;

       let status:any = await this.ingresoService.newIngreso(this.ingreso)
       
       status.error ? alert("error") :this.closeModal.nativeElement.click()
       
       this.estado.emit({
           habitacion:this.habitacion,
           estado:this.ingreso.estado
       })
    }
    else{
      this.errorinput=!this.errorinput
    }

  }
}
