import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder,FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../apiService/register.service';
import { IDeactivateComponent } from '../routeGuard/can-deactivate-route-guard.service';
import { RouteGuardServiceService } from '../routeGuard/route-guard-service.service';


@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrls: ['./addtodo.component.css']
})
export class AddtodoComponent implements OnInit,IDeactivateComponent {

  submitted:boolean=false;
  submitted1:boolean=false;
  blogForm:any;
  blogForm1:any;
  loginData: any;
  blogId:any
  blogData:any=[]

  constructor(private fb:FormBuilder,private apiService:RegisterService,private router:Router,
    private RouteGuardServiceService:RouteGuardServiceService) { }

  get title(){ return this.blogForm.get('title');}
  get author(){ return this.blogForm.get('author');}
  get image(){ return this.blogForm.get('image');}
  get content(){ return this.blogForm.get('content');}

  get title1(){ return this.blogForm.get('title1');}
  get author1(){ return this.blogForm.get('author1');}
  get image1(){ return this.blogForm.get('image1');}
  get content1(){ return this.blogForm.get('content1');}


  ngOnInit(): void {
    this.RouteGuardServiceService.expoireAdminTokenLogout()
    this.blogForm = this.fb.group({
      title: ['', [Validators.required]],
      author: ['', [Validators.required]],
      image: ['', [Validators.required]],
      content: ['', [Validators.required]],
    });

    this.blogForm1 = this.fb.group({
      title1: ['', [Validators.required]],
      author1: ['', [Validators.required]],
      image1: ['', [Validators.required]],
      content1: ['', [Validators.required]],
    });
    this.getBlogData()
  }

  get f(): { [key: string]: AbstractControl } {
    return this.blogForm.controls;
  }

  get f1(): { [key: string]: AbstractControl } {
    return this.blogForm1.controls;
  }

  logout()
  {
    localStorage.removeItem('adminlogin')
    this.router.navigate(['/admin']);
  }

  canExit() : boolean {
    if (confirm("Do you wish to Please confirm")) {
       return true
    }else {
      return false
    }
  }
  
  onDelete(id:number){
    console.log('id:',id)
   const promp=confirm("are you sure want to delete?")
   if(promp){
    this.apiService.deleteBlogApi(id).subscribe((data)=>{
      this.ngOnInit()
    })
   }
  }

  onUpdate(){
    this.submitted1=true
    if(this.blogForm1.valid)
    {
    this.apiService.updateBlogApi(this.blogId,this.blogForm1.value).subscribe((data:any)=>{
      this.ngOnInit()
    })
    }else{
      alert("Please enter a blog")
    }
  }

  getUpdatedValue(data:any){
    this.blogId=data.id
    this.blogForm1.patchValue({
      title1:data.title,
      author1:data.auther,
      image1:data.image,
      content1:data.content,
    });
  }

  getBlogData(){
    this.apiService.getBlogApi().subscribe((data:any)=>{
       this.blogData=data['data']
    })
  }

  saveBlog(){
    this.submitted=true
    if(this.blogForm.valid){
            console.log(this.blogForm.value)
            this.apiService.addTodoApi(this.blogForm.value).subscribe((data) =>{
                console.log("todo added");
                console.log(data);
                
            })
            window.location.reload();
    }else{
      alert('please enter your blog')
    }

    // if(this.addTodoForm.valid){
    //   this.apiService.addTodoApi(this.addTodoForm.value).subscribe((data) =>{
    //     console.log("todoadded");
    //   })
    // }
  }

}
