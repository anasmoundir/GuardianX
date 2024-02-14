import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegistrationData } from '../../app/registration.model';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  @Output() onSubmitLoginEvent = new EventEmitter<{ username: string, password: string }>();
  @Output() onSubmitRegisterEvent = new EventEmitter<RegistrationData>();

  username: string = "";
  password: string = "";
  active: string = "login";

  onSubmitLogin(): void {
    this.onSubmitLoginEvent.emit({ username: this.username, password: this.password });
  }

  onSubmitRegister(): void {
    this.onSubmitRegisterEvent.emit(this.registerData);
  }


  registerData: RegistrationData = {
    username: "",
    password: "",
    email: "",
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    address: "",
    city: "",
    postalCode: "",
    phoneNumber: ""
  };

  onLoginTab(): void {
    this.active = "login";
  }

  onRegisterTab(): void {
    this.active = "register";
  }
}
