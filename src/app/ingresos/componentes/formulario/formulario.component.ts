import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Input,
  Output,
  EventEmitter
} from "@angular/core";
import { IngresoService } from "../../servicios/ingreso.service";
import { FormGroup } from "@angular/forms";
import { Ingreso } from "../../clases/ingreso";
import * as moment from "moment";
import { Observable } from "rxjs";

@Component({
  selector: "app-formulario",
  templateUrl: "./formulario.component.html",
  styleUrls: ["./formulario.component.css"]
})
export class FormularioComponent implements OnInit {

  loading:boolean;
  @Input() events: Observable<void>;
  @Input() habitacion: string;
  @Input() estadoactual: string;
  @Output() estado = new EventEmitter();
  @ViewChild("closeModal", { static: false }) closeModal: ElementRef;

  ingresoOld:Ingreso[];
  ingreso = new Ingreso();
  errorinput: boolean = false;
  constructor(public ingresoService: IngresoService) {}

  ngOnInit() {
      this.events.subscribe((data: any) => {
        this.estadoactual = data.estadoactual
        this.habitacion   = data.habitacion
        if (data.estadoactual == "ocupado" || data.estadoactual == "reservado")
             this.ingresoService.getingreso(data)
                                .subscribe((data: any) => {
                                 console.log(data);
                                 
                                 this.ingresoOld = data
                                 this.loading=true
        });
    });
  }
 async onSubmit(form: FormGroup) {
    if (form.valid) {
      this.ingreso.fechaIngreso = moment()
        .locale("es")
        .format("L")
        .toString();
      var color = Math.floor(0x1000000 * Math.random()).toString(16);
      this.ingreso.color = `solid 4px #${("000000" + color).slice(-6)}`;
      this.ingreso.habitacion = this.habitacion;
      this.ingreso.finalizado = false;
      let status: any = await this.ingresoService.newIngreso(this.ingreso);
      status.error ? alert("error") : this.closeModal.nativeElement.click();
      this.updateHabitacion(this.habitacion,this.ingreso.estado)
      form.reset()
    } else {
      this.errorinput = !this.errorinput;
    }
}
async salida(index){
  if(this.estadoactual == 'ocupado'){
     let fecha      = moment().locale("es").format("L").toString();
     let _id        = this.ingresoOld[index]._id
     let habitacion = this.habitacion
     let status:any = await this.ingresoService.salida({_id,fecha,habitacion})
     status.error ? alert("Error") : alert("Se Registro la Salida")
     this.updateHabitacion(habitacion,"disponible")
     this.closeModal.nativeElement.click();
   }
}
async reserva(index,estado){
  let estadoHabitacion;
  if(this.estadoactual == 'reservado'){
 
         this.ingresoOld[index].reserva = estado

         if(estado){
             this.ingresoOld[index].fechaIngreso =   this.ingreso.fechaIngreso = moment().locale("es") .format("L").toString();
             estadoHabitacion = "ocupado"
         }
         else estadoHabitacion = "disponible"

         let status:any = await this.ingresoService.reserva(this.ingresoOld[index])
         status.error ?  alert("Ocurrio Un Error") : alert(`Reserva ${estado ? "Comfirmada": "Cancelada"}`)
         this.closeModal.nativeElement.click();
         this.updateHabitacion(this.ingresoOld[index].habitacion,estadoHabitacion)
    
   

  }
}

updateHabitacion(habitacion,estado){
  this.estado.emit({
    habitacion,
    estado
  });

}

}
