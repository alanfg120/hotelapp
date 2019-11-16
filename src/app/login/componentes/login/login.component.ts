import { Component, OnInit } from '@angular/core';
import { Usuario } from './../../UserClass'

import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario= new Usuario();
  
  
  constructor(private router: Router,public auth:AuthService) { }

  ngOnInit() {

  }
  login(form:any){
    
    
    if(form.valid){
        this.auth.login(this.usuario).subscribe(
        (data:any)=>{
            if(data.auth){
              console.log("hola");
              
               sessionStorage.setItem('token',data.token)
               this.router.navigate(['home'])
            }
         },
         (err)=>{
            if(err)alert("Datos Incorrectos")
          }
         )
    
    }

  }


}
