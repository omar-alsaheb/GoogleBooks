import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }
  apiKey='AIzaSyD0yN1BQGS4KOJmbrSm3DdEhnrNsHfTUFM'
  baseUrl = 'https://www.googleapis.com/books/v1/volumes?q=books&printType=magazines&key='+this.apiKey+'&startIndex=0&maxResults=40&orderBy=relevance';
  baseUrl2 = 'https://www.googleapis.com/books/v1/volumes?';


  getBooks(): Observable<any> {
    return this.http.get(this.baseUrl).pipe();
  }

  getBooksBySearch(search?: string):Observable<any>  {
    let params = new HttpParams();
  params = params.append('q', search);

    return this.http.get(this.baseUrl2 + 'printType=magazines&key='+this.apiKey+'&startIndex=0&maxResults=40&orderBy=relevance', { params });
  }
}
