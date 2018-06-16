// Angular Dependencies
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from '@angular/http';
import { retry } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
// App Dependencies
import { environment } from '../../environments/environment';
import { SetupUser } from '../models/models';

@Injectable()
export class ApiService {
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  // Sign In and Sign Up

  public login(fullUser: SetupUser): Observable<Response> {
    // Add Validation Later
    const user = {
      email: fullUser.email,
      key: fullUser.key
    };
    return this.http
      .post<Response>(
        `${environment.apiUrl}/login`,
        user,
        this.getHeaders()
      ).pipe(retry(3));
  }

  // Dashboard

  public getUserParameters(): Observable<Response> {
    return this.http
      .get<Response>(`${environment.apiUrl}/users/parameters`, this.getAuthHeaders())
      .pipe(retry(3));
  }

  // Auth


  public setToken(token: string): void {
    localStorage.setItem('ag-min', token);
    this.router.navigate(['/dashboard']);
  }

  public checkToken(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      const token = localStorage.getItem('ag-min');
      if (token) {
        this.http
          .get<Response>(`${environment.apiUrl}/users`, this.getAuthHeaders())
          .pipe(retry(3))
          .subscribe(
            (result: any) => {
              console.log(result);
              resolve(true);
            },
            (failure: any) => {
              console.error(failure);
              this.unauthorized();
              reject(false);
            }
          );
      } else {
        this.unauthorized();
        reject(false);
      }
    });
  }

  private unauthorized(): void {
    localStorage.removeItem('ag-min');
    this.router.navigate(['/signin']);
  }

  private getAuthHeaders(): { headers: HttpHeaders, withCredentials: boolean } {
    return {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem('ag-min'),
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=utf-8'
      }),
      withCredentials: true
    };
  }

  private getHeaders(): { headers: HttpHeaders } {
    return {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=utf-8'
      })
    };
  }
}
