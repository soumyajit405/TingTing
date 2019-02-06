import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';


@Injectable()
export class ApiService {

    baseUrl: string = "https://autoiinnovations.com/TingTingAPI/rest/";
    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      };
    constructor(private httpClient: HttpClient) { }

    public get(url) {
        return this.httpClient.get(this.baseUrl + url).pipe(
            map(this.extractData));
    }
    public post( url , body) {
        return this.httpClient.post<any>(this.baseUrl + url, body, this.httpOptions).pipe(
            tap((product) => console.log(`added product w/ id=${product.id}`)),
            catchError(this.handleError<any>('addProduct'))
          );
    }
    handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
          // TODO: send the error to remote logging infrastructure
          console.error(error); // log to console instead
          // TODO: better job of transforming error for user consumption
          console.log(`${operation} failed: ${error.message}`);
          // Let the app keep running by returning an empty result.
          return of(result as T);
        };
      }
      extractData(res: Response) {
        let body = res;
        return body || { };
      }
    

}