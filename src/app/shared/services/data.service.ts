import { Injectable } from '@angular/core';
import {Headers, Http, RequestOptions} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/catch';

@Injectable()
export class DataService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private options = new RequestOptions({ headers: this.headers });
  private apiUrl = 'assets/data.json';

  constructor(private http: Http) { }

  fetchAll(): Observable<any> {
    return this.http.get(`${this.apiUrl}`)
      .map(response => response.json())
      .catch(this.handleError)
      .retry(3);
  }

  fetch(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`)
      .map(response => response.json())
      .catch(this.handleError);
  }

  remove(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`, this.options)
      .map(response => response.json())
      .catch(this.handleError);
  }

  add(modelObject: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, modelObject, this.options)
      .map(response => response.json())
      .catch(this.handleError);
  }

  update(modelObject: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${modelObject.id}`, modelObject, this.options)
      .map(response => response.json())
      .catch(this.handleError);
  }


  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body['error'] || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
