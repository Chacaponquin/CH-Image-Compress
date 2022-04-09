import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ErrorsService {
  constructor() {}

  handleHttpError(err, result) {
    console.log(err);
    return result;
  }
}
