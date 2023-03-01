import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AddtodoComponent } from '../addtodo/addtodo.component';

export interface IDeactivateComponent {
  canExit: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable({
  providedIn: 'root'
})


export class CanDeactivateRouteGuardService implements CanDeactivate<IDeactivateComponent> {

  constructor() { }
  canDeactivate(component:IDeactivateComponent,
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot,
    nextState: RouterStateSnapshot) : Observable<boolean> | Promise<boolean> | boolean {

  return component.canExit();

}
}
