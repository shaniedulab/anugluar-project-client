import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RouteGuardServiceService } from '../routeGuard/route-guard-service.service';
import {  Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CanActivateRouteGuardService implements CanActivate {

  constructor(private RouteGuardServiceService:RouteGuardServiceService,
    private Router:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
      if(this.RouteGuardServiceService.routeGuardFunction()){
        return true;
      }else{
        this.Router.navigate(['/login'])
        return false;
      }
  }
}
