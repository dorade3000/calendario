import {Component, computed} from '@angular/core';
import {MatFormField, MatInput, MatLabel} from "@angular/material/input";
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import {toSignal} from "@angular/core/rxjs-interop";
import {MatButton} from "@angular/material/button";

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

  usernameForm: FormControl = new FormControl('');
  passwordForm: FormControl = new FormControl('');

  private readonly usernameInput = toSignal(this.usernameForm.valueChanges);
  private readonly passwordInput = toSignal(this.passwordForm.valueChanges);

  private readonly signUpButtonEnabled = computed(() => {
    return this.usernameInput() && this.passwordInput();
  });

  onSignUpClick() {

  }
}
