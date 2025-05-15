import { Injectable } from '@angular/core';
import { LoginRequest } from './login-request';;
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { LoginResult } from './login-result';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  private _authStatus = new BehaviorSubject<boolean>(false);
  authStatus = this._authStatus.asObservable();
  constructor(private http: HttpClient) { }

  login(loginRequest: LoginRequest): Observable<LoginResult> {
    let url = `${environment.baseUrl}api/Admin/Login`;
    return this.http.post<LoginResult>(url,loginRequest).pipe(tap(loginResult => 
    {
      if (loginResult.success)
        {
          localStorage.setItem("jwtToken", loginResult.token);
          this.setAuthStatus(true);
        }
    }
    ));
    
  }

  private setAuthStatus(value:boolean){
    this._authStatus.next(value);
  }

  logout ()
  {
    localStorage.removeItem("jwtToken");
    this.setAuthStatus(false);
  }

  isAuthenticated() : boolean
  {
    return localStorage.getItem("jwtToken")!=null;
  }
}