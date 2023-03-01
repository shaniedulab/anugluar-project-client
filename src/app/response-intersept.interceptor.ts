import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators'; 
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ResponseInterseptInterceptor implements HttpInterceptor {

  constructor(private http:HttpClient) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request)
  }


  

}
