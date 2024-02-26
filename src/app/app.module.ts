import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule}  from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AuthContentComponent } from './components/auth-content/auth-content.component';
import { WelcomeContentComponent } from './components/welcome-content/welcome-content.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { ContentComponent } from './components/content/content.component';
import { AdminComponent } from './components/admin/admin.component';
import { UserComponent } from './components/user/user.component';
import { ErrorComponent } from './components/error/error.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {tokenInterInterceptorInterceptor} from "./intercepters/token-inter-interceptor.interceptor";
import { JwtHelperService } from '@auth0/angular-jwt';
import { LogoutComponent } from './components/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthContentComponent,
    WelcomeContentComponent,
    ContentComponent,
    AdminComponent,
    UserComponent,
    ErrorComponent,
    LoginFormComponent,
    LogoutComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    JwtHelperService,
    {
      provide: HTTP_INTERCEPTORS,
      useValue: tokenInterInterceptorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
