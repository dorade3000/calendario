import { Routes } from '@angular/router';
import {LoginPageComponent} from "./features/user/login/login-page.component";
import {SignUpPageComponent} from "./features/user/sign-up/sign-up-page.component";

export const routes: Routes = [
	{
		path: '',
		component: LoginPageComponent,
		title: 'Calendario Login',
	},
	{
		path: 'register',
		component: SignUpPageComponent,
		title: 'Register'
	},
];
