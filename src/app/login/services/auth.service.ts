import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public http:HttpClient,private router: Router) { }

   login(usuario) {
     return this.http.post("http://localhost:3000/usuarios/login",usuario)
   }
        
   loginout() {
     sessionStorage.removeItem('token')
     this.router.navigate(['login'])
   } 
  

}
