import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserInfInterface } from 'src/app/data/interfaces/userInf.metadata';
import { BehaviorSubject, catchError, map, Observable, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginFormInterface } from '../../../data/interfaces/loginForm.metadata';
import { SignUpInterface } from '../../../data/interfaces/signUp.metadata';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  currentUser = new BehaviorSubject<UserInfInterface | null>(null);
  isLoading = new BehaviorSubject<boolean>(true);

  constructor(private http: HttpClient) {}

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      return of(result as T);
    };
  }

  getInitialUser(): void {
    this.http
      .get<UserInfInterface>(`${environment.uri}/getUserByToken`)
      .pipe(
        tap(() => console.log('Logueado')),
        catchError(this.handleError<UserInfInterface>(''))
      )
      .subscribe((user) => this.currentUser.next(user));
  }

  checkUser(
    loginForm: LoginFormInterface
  ): Observable<UserInfInterface> | null {
    return this.http
      .put<UserInfInterface>(`${environment.uri}/loginUser`, loginForm)
      .pipe(
        map((resp: UserInfInterface) => resp),
        tap((_) => console.log('Conseguido')),
        catchError(this.handleError<UserInfInterface>(''))
      );
  }

  createUser(signUpData: SignUpInterface) {
    return this.http
      .post<UserInfInterface>(`${environment.uri}/newUser`, signUpData)
      .pipe(
        map((resp: UserInfInterface) => {
          return resp;
        }),
        tap((_) => console.log('Get baby')),
        catchError(this.handleError<UserInfInterface>(''))
      );
  }

  get getCurrentUser() {
    return this.currentUser.getValue();
  }
}
