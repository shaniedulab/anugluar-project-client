import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../apiService/register.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'] 
})

export class RegisterComponent implements OnInit { 
  registerForm: any;
  submitted:boolean = false;
  registerData: any;
  
  constructor(private fb:FormBuilder,private apiService:RegisterService,private router:Router) { }

  get username(){ return this.registerForm.get('username');}
  get email(){ return this.registerForm.get('email');}
  get password(){ return this.registerForm.get('password');}


  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required, 
        Validators.minLength(6),
        Validators.maxLength(20)]],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(20)
          ]
        ],
    });
}
    get f(): { [key: string]: AbstractControl } {
    return this.registerForm.controls;
  }

  submit(){
    this.submitted=true
     this.registerData=this.registerForm.value
    if(this.registerForm.valid){
      this.apiService.postRegisterApi(this.registerData)?.subscribe(data=>{
        console.log(data);
      })
      this.router.navigate(['/login']);
    }
  }
}
