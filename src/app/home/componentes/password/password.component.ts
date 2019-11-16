import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/login/services/auth.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
    errorinput:boolean = false;
    newPassword:string
    confPassword:string;

  constructor(public auth:AuthService) { }

  ngOnInit() {
  }
  onSubmit(form:any){
     if(form.valid && this.newPassword==this.confPassword){
         this.auth.updatePassword({pwd:this.newPassword}).subscribe((data:any)=>{
           data.error ? alert("ocurrio un error") : alert("Se cambio la contraseña")

         })
     }
     else  this.newPassword!=this.confPassword ? alert("las Contraseñas no coinciden") 
                                               : this.errorinput = !this.errorinput;
     

         
  }
}
