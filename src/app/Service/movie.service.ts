import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }
  baseUrl = 'https://www.googleapis.com/books/v1/volumes?q=time&printType=magazines&key=AIzaSyBEJ2ImpntmnG3feH7k9x4uz-fQR6hA_y4&startIndex=0&maxResults=12&orderBy=relevance';
  baseUrl2 = 'https://www.googleapis.com/books/v1/volumes?';


  getBooks(): Observable<any> {
    return this.http.get(this.baseUrl).pipe();
  }

  getBooksBySearch(search?: string):Observable<any>  {
    let params = new HttpParams();
  params = params.append('q', search);

    return this.http.get(this.baseUrl2 + 'printType=magazines&key=AIzaSyBEJ2ImpntmnG3feH7k9x4uz-fQR6hA_y4&startIndex=0&maxResults=10&orderBy=relevance', { params });
  }
}
