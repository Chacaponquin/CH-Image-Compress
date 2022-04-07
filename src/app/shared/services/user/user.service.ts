import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserInfInterface } from 'src/app/data/interfaces/userInf.metadata';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginFormInterface } from '../../../data/interfaces/loginForm.metadata';
import { SignUpInterface } from '../../../data/interfaces/signUp.metadata';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  checkUser(
    loginForm: LoginFormInterface
  ): Observable<UserInfInterface> | null {
    return this.http
      .put<UserInfInterface>(`${environment.uri}/checkUser`, loginForm)
      .pipe(
        map((resp: UserInfInterface) => resp),
        tap((_) => console.log('Get baby')),
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
}
