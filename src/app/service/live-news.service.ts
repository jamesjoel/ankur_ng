import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, switchMap } from 'rxjs/operators';
import {Http, Response} from '@angular/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LiveNewsService {
  name = 'james';
  sport = 'football';
  constructor(
    private http: HttpClient
  ) { }

  getLiveNewsData() {
    const url = 'https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=ac9bcfb91c8045c982baa4dab38bfbf8';
    return this.http.get(url);
  }
  getData(): Observable<string> {
    return of('abc');
  }
}
