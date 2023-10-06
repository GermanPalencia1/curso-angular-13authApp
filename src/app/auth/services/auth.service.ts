import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { Observable, of } from 'rxjs';
import { enviroment } from 'src/enviroments/eviroments';


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private readonly baseUrl: string = enviroment.baseUrl;
  private http = inject(HttpClient);

  private _currentUser = signal<User | null>(null);
  private _authStatus = signal<AuthStatus>();

  constructor() { }

  login(email: string, passwor: string): Observable<boolean> {

    return of (true);

  }

}
