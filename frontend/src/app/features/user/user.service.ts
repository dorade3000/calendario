import {inject, Service} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from '@env/environment';
import {UserDto} from "./dtos/user-dto";

@Service()
export class UserService {
	private http = inject(HttpClient);
	private apiUrl = `${environment.apiBaseUrl}/user/register`;

	register(userData: UserDto): Observable<any> {
		//TODO later have a wrapper service to make api calls
		return this.http.post(this.apiUrl, userData);
	}
}
