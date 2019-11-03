import { Injectable } from "@angular/core";
import {
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivate
} from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class LoginService implements CanActivate {
  constructor(private router: Router) {}

  canActivate(netx: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (sessionStorage.getItem('token')) {
        
   
        return true;
    } else {
      this.router.navigate(['login'])
      return false;
    }
  }
}
