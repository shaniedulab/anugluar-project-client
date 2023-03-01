import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../apiService/register.service';
import { RouteGuardServiceService } from '../routeGuard/route-guard-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted:boolean=false;
  routeGuard:boolean=false;
  loginForm: any;
  loginData: any;
  setTokenInLocalStorage: any;
  constructor(private fb:FormBuilder,private apiService:RegisterService,private router:Router,
    private RouteGuardServiceService:RouteGuardServiceService) { }
  get email(){ return this.loginForm.get('email');}
  get password(){ return this.loginForm.get('password');}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(20)
        ]
      ],
    });
  }
  
  get f(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }
  submit(){
    this.submitted=true
    this.loginData=this.loginForm.value
    if(this.loginForm.valid){
      this.apiService.postLoginApi(this.loginData).subscribe((data:any)=>{
        console.log(data)
        if(data['status']==200){
          this.setTokenInLocalStorage=localStorage.setItem('token',data['data']);
          this.setTokenInLocalStorage=localStorage.setItem('refreshToken',data['refreshToken']);
          this.RouteGuardServiceService.routeGuardFunction()
          this.router.navigate(['/home']);
        }else if(data['status']==400){
           alert("invalid email id")
        }
        else if(data['status']==401){
          alert("invalid password")
       }
      })
    }
  }
}
