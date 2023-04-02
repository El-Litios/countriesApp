import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) {}

  search(arg: string): Observable<any> {
    const url = `${this.apiUrl}/name/${arg}`;
    return this.http.get(url);
  }
}
