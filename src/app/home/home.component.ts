import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouteGuardServiceService } from '../routeGuard/route-guard-service.service';
import { RegisterService } from '../apiService/register.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  getBlog:any = [];
  userDetails:any=[]

  constructor(private router:Router,
    private RouteGuardServiceService:RouteGuardServiceService,private api:RegisterService) { }

  ngOnInit(): void {
    this.api.getBlogApi().subscribe((data:any)=>{   
      this.getBlog=data['data']
    })
    this.RouteGuardServiceService.expoireTokenLogout()
    this.getUserId()
  }

  testMiddlwarefun(){
    this.api.testMiddlware().subscribe((data:any)=>{
     console.log(data);
    })
  }
   
 getUserId(){
  this.api.getUserDetails().subscribe((data:any)=>{
    this.userDetails=data['data']
  })
 }

  logout()
  {
    localStorage.removeItem('token')
    this.router.navigate(['/login']);
  }

}
