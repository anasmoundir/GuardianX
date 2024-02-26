import { Component, Input } from '@angular/core';
import {fadeInOut} from '../../animations';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css'],
  animations: [fadeInOut]
})
export class ErrorComponent {
  @Input() errorMessage: string | null = null;
}
