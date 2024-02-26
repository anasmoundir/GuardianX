import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { RegistrationData } from '../../registration.model';
import { AxiosService } from '../../axios.service';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  @Output() onSubmitRegisterEvent = new EventEmitter<RegistrationData>();
  @Output() onSubmitLoginEvent = new EventEmitter<{ username: string, password: string }>();
  username: string = "";
  password: string = "";
  active: string = "login"
  error: string = "";

  constructor(
    private axiosService: AxiosService,
    private authService: AuthService,
    private router: Router
  ) { }

  onSubmitLogin(): void {
    this.axiosService.login({ username: this.username, password: this.password }).then(
      (response) => {
        localStorage.setItem('user', response.data.accessToken);
        const helper = new JwtHelperService();
        const decodedToken = helper.decodeToken(response.data.accessToken);
        const role = decodedToken.role;
        
        if (role === '[ADMIN]' || role === 'ADMIN' || role === 'admin' || role === 'Admin') {
          this.router.navigate(['/admin']);
        } else {
          this.router.navigate(['/user']);
        }
      },
      (error) => {
        this.error = 'Login failed:' + error;
      }
    );
  }

  onSubmitRegister(): void {
    this.axiosService.register(this.registerData).then(
      (response) => {
        console.log('Registration successful:', response);
        this.active = "login";
      },
      (error) => {
        this.error = 'Registration failed:' + error;
      }
    );
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


