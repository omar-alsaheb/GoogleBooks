import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Items } from '../Models/item';
import { VolumeInfo } from '../Models/volumeInfo';
import { BookService } from '../Service/book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient, private service: BookService) { }

  books: Array<any>;

  items: Items;
  volumeInfo: VolumeInfo[];
  @ViewChild('search') search: ElementRef;
  searchEl: string;

  ngOnInit(): void {

    this.getbook();

    // this.getbook1();
    this.items = {
      kind: '',
      id: '',
      etag: '',
      selfLink: '',
      volumeInfo: {
        title: '',
        publishedDate: '',
        description: '',
        pageCount: 0,
        printType: '',
        maturityRating: '',
        allowAnonLogging: true,
        contentVersion: '',
        language: '',
        previewLink: '',
        infoLink: '',
        canonicalVolumeLink: ''
      }
    }

  }


  getbook() {
    this.service.getBooks().subscribe(data => {
      this.books = data.items


    }, error => {
      console.log(error)
    })
  }

  // getbook1() {
  //   this.service.getBooks1().subscribe(data => {
  //     // this.books = data.items
  //     this.items = data.items;

  //     // console.log(this.books)
  //     console.log(this.items)


  //   }, error => {
  //     console.log(error)
  //   })
  // }

  onSearch() {
    this.searchEl = this.search.nativeElement.value;

    if (this.search.nativeElement.value === '') {
      alert("Enter any word :)")

    }
    else {
      this.service.getBooksBySearch(this.searchEl).subscribe(r => {
        this.books = r.items
      }, error => {
        console.log(error)
      })
    }
  }
  onRest() {
    this.getbook();
    this.search.nativeElement.value =''
  }

  // key: string = 'title';
  // reverse: boolean = false;
  // onSorting(key) {
  //   this.key = key;
  //   this.reverse = !this.reverse;
  // }

  sorting() {
    this.books.sort((a, b) => (a.volumeInfo.title > b.volumeInfo.title) ? 1 : -1)
  }

  sortingDate() {
    this.books.sort((a, b) => (a.volumeInfo.publishedDate > b.volumeInfo.publishedDate) ? 1 : -1)
  }

}
