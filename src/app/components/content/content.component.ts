import { Component, EventEmitter, Output } from '@angular/core';
import{AxiosService} from '../../axios.service';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

  constructor(private axiosService: AxiosService) { }

  onLogin(input: { username: string, password: string }): void {
    this.axiosService.login(input).then(
      (response) => {
        console.log('Login successful:', response);
      },
      (error) => {
        console.error('Login failed:', error);
      }
    );
  }

  onRegister(input: any): void {
    this.axiosService.register(input).then(
      (response) => {
        console.log('Registration successful:', response);
      },
      (error) => {
        console.error('Registration failed:', error);
      }
    );
  }
}
