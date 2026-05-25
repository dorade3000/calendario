import {Component} from '@angular/core';
import {MatFormField, MatInput, MatLabel} from "@angular/material/input";

@Component({
  selector: 'app-login-page',
  imports: [
    MatFormField,
    MatInput,
    MatLabel
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
