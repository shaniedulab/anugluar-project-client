import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscriber } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {
constructor(private http:HttpClient) {  }

  postRegisterApi(data:any){
    return this.http.post(`${environment.baseUrl}/postRegister`,data)
  }
  
  postLoginApi(data:any){
    return this.http.post(`${environment.baseUrl}/login`,data)
  }

  addTodoApi(data:any){
    return this.http.post(`${environment.baseUrl}/addTodo`,data)
  }

  getBlogApi(){
    return this.http.get(`${environment.baseUrl}/getBlog`)
  }

  deleteBlogApi(id:any){
    return this.http.delete(`${environment.baseUrl}/deleteBlog/${id}`)
  }

  updateBlogApi(id:any, data:any){
    return this.http.put(`${environment.baseUrl}/updateBlog/${id}`,data)
  }

  getUserDetails(){
   return this.http.get(`${environment.baseUrl}/getUserDetails`)
  }
  
  testMiddlware(){
    return this.http.get(`${environment.baseUrl}/testMiddlware`)
  }
}
