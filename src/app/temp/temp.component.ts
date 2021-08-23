import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BooksModel } from '../Models/books';
import { Items } from '../Models/item';
import { test } from '../Models/test';

import { VolumeInfo } from '../Models/volumeInfo';


@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.css']
})
export class TempComponent implements OnInit {
  books: BooksModel[];
  Item:Items
  VolumeInfo:VolumeInfo[]
  tes: any;
  tests:test

  constructor(private http: HttpClient) { }
  baseUrl = 'https://www.googleapis.com/books/v1/volumes?q=time&printType=magazines&key=AIzaSyBEJ2ImpntmnG3feH7k9x4uz-fQR6hA_y4&startIndex=0&maxResults=10';
  ngOnInit(): void {
    this.get();
    this.tests={
      id:0,
      title:''
    }

    console.log(this.tests)

  }
  // getBooks(): Observable<BooksModel[]> {
  //   return this.http.get<BooksModel[]>(this.baseUrl).pipe();

  // }
  getBooks(): Observable<any> {
    return this.http.get(this.baseUrl).pipe();

  }
  get() {
    this.getBooks().subscribe(r => {
      this.books=r;
      this.tes = r.items;


    }, e => {
      console.log(e)
    })
  }

}
