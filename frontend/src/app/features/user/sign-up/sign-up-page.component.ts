import {Component, computed, inject} from '@angular/core';
import {MatFormField, MatInput, MatLabel} from "@angular/material/input";
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import {toSignal} from "@angular/core/rxjs-interop";
import {MatButton} from "@angular/material/button";
import {UserService} from "../user.service";

@Component({
  selector: 'app-sign-up',
  imports: [
    MatFormField,
    MatInput,
    MatLabel,
    ReactiveFormsModule,
    MatButton
  ],
  templateUrl: './sign-up-page.component.html',
  styleUrl: './sign-up-page.component.scss'
})
export class SignUpPageComponent {
  userService: UserService = inject(UserService);

  usernameForm: FormControl<string> = new FormControl<string>('');
  passwordForm: FormControl<string> = new FormControl<string>('');

  private readonly usernameInput = toSignal(this.usernameForm.valueChanges);
  private readonly passwordInput = toSignal(this.passwordForm.valueChanges);

  private readonly signUpButtonEnabled = computed(() => {
    return this.usernameInput() && this.passwordInput();
  });

  onSignUpClick() {
    console.error('signUpClicked', this.usernameInput(), this.passwordInput());
    this.userService.register({
      username: this.usernameInput(),
      password: this.passwordInput()
    }).subscribe({
      next: value => {
        console.error('registered user')
      },
      error: err => {
        console.error('registering user didnt work');
      }
    })
  }
}
