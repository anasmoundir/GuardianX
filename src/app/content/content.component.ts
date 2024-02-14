import { Component, EventEmitter, Output } from '@angular/core';
import{AxiosService} from '../axios.service';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

constructor(private axiosService :AxiosService){}
  onLogin(input :any) :void
  {
    this.axiosService.request(
      "POST",
      "/login",
      {
        username:input.username,
        password: input.password
      }
    );

  }
  onRegister(input:any) : void
  {
    this.axiosService.request(
      "POST",
      "/register",
      {
        username:input.username,
        password: input.password,
        email: input.email,
        firstName: input.firstName,
        lastName: input.lastName,
        dateOfBirth: input.dateOfBirth,
        address: input.address,
        city: input.city,
        postalCode: input.postalCode,
        phoneNumber: input.phoneNumber
      }
    );
  }
}
