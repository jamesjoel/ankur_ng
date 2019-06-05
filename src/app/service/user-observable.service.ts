import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';

interface StuData {
  name: string;
  age: number;
}
@Injectable({
  providedIn: 'root'
})
export class UserObservableService {

  arr=[
    {
      name : "rohit",
      age : 28
    },
    {
      name : "nidhi",
      age : 28
    },
    {
      name : "jaya",
      age : 30
    },
    {
      name : "ankur",
      age : 28
    }

  ]
  messageSource = new BehaviorSubject(this.arr);
  messageObserve = this.messageSource.asObservable();
  constructor() { }

  changeMessage(message: StuData[]) {
    this.messageSource.next(message);
  }

  getDataOfUser(): Observable<string> {
    return of('ankur');
  }
}
