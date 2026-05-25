import {Component} from '@angular/core';
import {LoginPageComponent} from "./features/login-page/login-page.component";

@Component({
  selector: 'app-root',
  imports: [
    LoginPageComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
