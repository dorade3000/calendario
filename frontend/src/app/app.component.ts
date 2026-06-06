import {Component, ChangeDetectionStrategy} from '@angular/core';
import {LoginComponent} from "./features/login-page/login.component";

@Component({
  selector: 'app-root',
  imports: [
    LoginComponent
  ],
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
