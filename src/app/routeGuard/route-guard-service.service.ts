import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class RouteGuardServiceService {

  getToken: any;
  getAdminToken: any;

  constructor(private router:Router) { }

  routeGuardFunction(){
    return !!localStorage.getItem('token')
  }

  expoireTokenLogout(){
    this.getToken=localStorage.getItem('token')
    setTimeout(()=>{
      const removeToken=localStorage.removeItem('token')
      console.log(removeToken)
    },360000)
    // if(this.getToken==null || this.getToken==undefined || this.getToken =='') { 
    //   this.router.navigate(['/login']);
    // }
  }

  expoireAdminTokenLogout(){
    this.getAdminToken=localStorage.getItem('adminlogin')
    setTimeout(()=>{
      const removeToken=localStorage.removeItem('adminlogin')
      console.log(removeToken)
    },36000)
    if(this.getAdminToken==null || this.getAdminToken==undefined || this.getAdminToken =='') { 
      this.router.navigate(['/admin']);
    }
  }


}
