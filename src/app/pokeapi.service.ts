import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokeapiService {
  constructor(private http: HttpClient) {}

  apiURL = 'https://pokeapi.co/api/v2/';

  getPokemonList(limit: number, offset: number): Observable<any> {
    return this.http
      .get(`${this.apiURL}pokemon/?limit=${limit}&offset=${offset}`)
      .pipe(catchError(this.handleError));
  }

  getPokemonDetails(id: number): Observable<any> {
    return this.http
      .get(`${this.apiURL}pokemon/${id}`)
      .pipe(catchError(this.handleError));
  }

  getSpecies(id: number): Observable<any> {
    return this.http
      .get(`${this.apiURL}pokemon-species/${id}`)
      .pipe(catchError(this.handleError));
  }

  getEvolutionChain(url: string): Observable<any> {
    console.log(url);

    return this.http.get(`${url}`).pipe(catchError(this.handleError));
  }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
