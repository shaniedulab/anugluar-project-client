import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators'; 
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RequestInterceptInterceptor implements HttpInterceptor {
  jwttoken:any
  constructor(private http:HttpClient) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.jwttoken =localStorage.getItem('token')
    if(request.method == "GET"){
      console.log("get")
    }
    if(this.jwttoken){
      request = request.clone({
        headers:  request.headers.set('Authorization', `Bearer ${this.jwttoken}`)
      }); 
    }
    

    return next.handle(request).pipe(
      tap(async (event) => {
        if (event instanceof await HttpResponse && event.status == 401) {
          const refreshToken = await localStorage.getItem('refreshToken');
          this.getAccessTokenFromRefreshToken(refreshToken).subscribe(async(data: any) => {
            await localStorage.setItem('token', data['data']);
          });
        }
      },
      async (error) => {
        if (error.status == 401) {
          const refreshToken = await localStorage.getItem('refreshToken');
          this.getAccessTokenFromRefreshToken(refreshToken).subscribe(async (data: any) => {
            await localStorage.setItem('token', data['data']);
          });
        } else if (error.status === 404) {
          alert('Page Not Found!!!');
        }
        throw error;
      })
    );
  }

  getAccessTokenFromRefreshToken(ref:any){
    return this.http.post(`${environment.baseUrl}/refreshToken`,{refreshToken:ref})
  }

}
