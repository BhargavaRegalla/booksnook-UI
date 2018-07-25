import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { Books } from './books';
import { MessageService } from './message.service';
import { identifierModuleUrl } from '@angular/compiler';

@Injectable({ providedIn: 'root' })
export class BooksService {

  // private booksUrl = 'localhost:8080/books/';  // URL to web api
  url = 'http://localhost:8080';
  constructor(
    private http: Http,
    private messageService: MessageService) { }

  /** GET products from the server */
  getAdultBooks(): Observable<any> {
    const headers = new Headers({ 'Accept': 'application/json' });
    return this.http.get(this.url + "/books/category/8", { headers: headers });
  }

   getBooksbyid(id): Observable<any> {
    const headers = new Headers({ 'Accept': 'application/json' });
    return this.http.get(this.url + "/books/"+id , { headers: headers });
  }

  getKidsBooks(): Observable<any> {
    const headers = new Headers({ 'Accept': 'application/json' });
    return this.http.get(this.url + "/books/category/9 ", { headers: headers });
  }

  getNewBooks(): Observable<any> {
    const headers = new Headers({ 'Accept': 'application/json' });
    return this.http.get(this.url + "/books/category/6", { headers: headers });
  }

  getBestBooks(): Observable<any> {
    const headers = new Headers({ 'Accept': 'application/json' });
    return this.http.get(this.url + "/books/category/7", { headers: headers });
  }
  getArtsBooks(): Observable<any> {
    const headers = new Headers({ 'Accept': 'application/json' });
    return this.http.get(this.url + "/books/category/1", { headers: headers });
  }
  getBioBooks(): Observable<any> {
    const headers = new Headers({ 'Accept': 'application/json' });
    return this.http.get(this.url + "/books/category/2", { headers: headers });
  }
  getCompBooks(): Observable<any> {
    const headers = new Headers({ 'Accept': 'application/json' });
    return this.http.get(this.url + "/books/category/3", { headers: headers });
  }
  getEntBooks(): Observable<any> {
    const headers = new Headers({ 'Accept': 'application/json' });
    return this.http.get(this.url + "/books/category/4", { headers: headers });
  }
  getHistBooks(): Observable<any> {
    const headers = new Headers({ 'Accept': 'application/json' });
    return this.http.get(this.url + "/books/category/5", { headers: headers });
  }
}