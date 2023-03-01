import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  adminForm:any
  setTokenInLocalStorage: any;
  adminCredential:any={
    email:"admin@admin.com",
    password:"password"
  }

  constructor(private fb:FormBuilder,private Router:Router) { }

  get adminEmail(){ return this.adminForm.get('adminEmail');}
  get adminPassword(){ return this.adminForm.get('adminPassword');}

  ngOnInit(): void {
    this.adminForm = this.fb.group({
      adminEmail: ['' ],
      adminPassword: [''],
    });
  } 

  
  adminDetailSave(){
    if(this.adminCredential['email'] == this.adminForm.controls.adminEmail.value && this.adminCredential['password'] == this.adminForm.controls.adminPassword.value){
      this.setTokenInLocalStorage=localStorage.setItem('adminlogin',this.adminCredential['email']);
      this.Router.navigate(['/addtodo'])
    }else{
     alert("Email  or Password incorrect ")
    }
  }

}
