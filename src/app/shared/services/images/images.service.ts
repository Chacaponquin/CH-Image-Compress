import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, tap } from 'rxjs';
import { UserInfInterface } from 'src/app/data/interfaces/userInf.metadata';
import { environment } from 'src/environments/environment.prod';
import { ErrorsService } from '../errors/errors.service';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root',
})
export class ImagesService {
  isLoading = new BehaviorSubject<boolean>(false);

  constructor(
    private http: HttpClient,
    private userService: UserService,
    private errorService: ErrorsService
  ) {}

  uploadImage(image: File) {
    const data: FormData = new FormData();
    data.append('image', image);
    data.append('userToken', this.userService.getCurrentUser.token);

    this.http
      .post<UserInfInterface>(`${environment.uri}/uploadImage`, data)
      .pipe(
        tap((_) => console.log('Imagen Subida')),
        catchError(this.errorService.handleHttpError)
      )
      .subscribe((updateUser: UserInfInterface) => {
        this.userService.currentUser.next(updateUser);
      });
  }
}
