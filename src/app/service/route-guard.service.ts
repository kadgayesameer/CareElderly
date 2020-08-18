import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { HardcodedAuthenticationServiceService } from './hardcoded-authentication-service.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService {

  constructor(private hardcodedAuthenticationService: HardcodedAuthenticationServiceService,
    private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.hardcodedAuthenticationService.isUserLoggedIn())
      return true;
    this.router.navigate(['/login']);

    return false;
  }

  onlyCheckNotNavigate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.hardcodedAuthenticationService.isUserLoggedIn()) {
      return true;
    } else {
      return false;
    }

  }
}
