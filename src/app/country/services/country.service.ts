import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) {}

  search(arg: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${arg}`;
    return this.http.get<Country[]>(url);
  }

  searchCapital(arg: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${arg}`;
    return this.http.get<Country[]>(url);
  }

  searchRegion(arg: string): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${arg}`;
    return this.http.get<Country[]>(url);
  }

  searchCountryByCode(arg: string): Observable<Country[]> {
    const url = `${this.apiUrl}/alpha/${arg}`;
    return this.http.get<Country[]>(url);
  }
}
