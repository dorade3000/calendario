import {Component} from '@angular/core';
import {MatFormField, MatInput, MatLabel} from "@angular/material/input";
import {MatButton, MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-login-page',
  imports: [
    MatFormField,
    MatInput,
    MatLabel,
    MatButton,
    MatButtonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
