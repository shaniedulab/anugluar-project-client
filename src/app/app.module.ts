import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterModule } from './register/register.module';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AddtodoComponent } from './addtodo/addtodo.component';
import { AdminComponent } from './admin/admin.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { RequestInterceptInterceptor } from './request-intercept.interceptor';
import { ResponseInterseptInterceptor } from './response-intersept.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NopagefoundComponent,
    AddtodoComponent,
    AdminComponent,
    ForgetpasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RegisterModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [{ provide: HTTP_INTERCEPTORS,  useClass: RequestInterceptInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS,  useClass: ResponseInterseptInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
