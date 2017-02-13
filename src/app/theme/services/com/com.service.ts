import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {KCom}  from "./kcom";
import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/do';  // for debugging

/**
 * This class provides the Com service with methods to read names and add names.
 */
@Injectable()
export class ComService {

  /**
   * Creates a new NameListService with the injected Http.
   * @param {Http} http - The injected Http.
   * @constructor
   */
  constructor(private http: Http) {}

  /**
   * Returns an Observable for the HTTP GET request for the JSON resource.
   * @return {string[]} The Observable for the HTTP request.
   */

  getKCom(): Observable<KCom> {
    return this.http.get('/assets/data/raw-kcom.json')
                    .map((res: Response) => {console.log(res.json()); res.json()})
                 // .do(data => console.log('server data:', data))  // debug
                    .catch(this.handleError);
  }

  /**
    * Handle HTTP error
    */
  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}

