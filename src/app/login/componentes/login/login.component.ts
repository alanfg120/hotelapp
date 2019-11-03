import { Component, OnInit } from '@angular/core';
import { Usuario } from './../../UserClass'
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario= new Usuario();
  
  
  constructor(private router: Router) { }

  ngOnInit() {

  }
  login(form:FormGroup){
    console.log(form.valid);
    
    if(form.valid){
      if(this.usuario.username == "admin" && this.usuario.pwd == "admin"){
         sessionStorage.setItem('token','hjshdjhfjd')
         this.router.navigate(['home'])
      }
    
    }

  }


}
