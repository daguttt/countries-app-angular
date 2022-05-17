import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private apiUrl: string = 'https://restcountries.com/v2/';
  constructor(private http: HttpClient) {}
  searchByContry(countryToSearch: string): Observable<Country[]> {
    const url: string = `${this.apiUrl}/name/${countryToSearch}`;
    return this.http.get<Country[]>(url);
  }
  searchByCapital(countryToSearch: string): Observable<Country[]> {
    const url: string = `${this.apiUrl}/capital/${countryToSearch}`;
    return this.http.get<Country[]>(url);
  }
}
