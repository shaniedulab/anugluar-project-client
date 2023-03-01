import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder,FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {
  verifyEmail:any;
  submitted:boolean=false;

  constructor(private fb:FormBuilder) { }

  get email(){ return this.verifyEmail.get('email');}

  ngOnInit(): void {
    this.verifyEmail = this.fb.group({
      email:['', [Validators.required, Validators.email]]
    })
  }
  
  get f(): { [key: string]: AbstractControl } {
    return this.verifyEmail.controls;
  }
  
  onVerifyEmail(){
    this.submitted=true
    if(this.verifyEmail.valid){
      console.log(this.verifyEmail.value)
    }
  }
}
