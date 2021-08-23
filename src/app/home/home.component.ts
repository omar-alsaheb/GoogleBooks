import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BookService } from '../Service/book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient, private service: BookService) { }

  books: Array<any>;;
  @ViewChild('search') search: ElementRef;
  searchEl: any;

  ngOnInit(): void {

    this.getbook();



  }


  getbook() {
    this.service.getBooks().subscribe(data => {
      this.books = data.items


      // console.log(this.books)

    }, error => {
      console.log(error)
    })
  }


  onSearch() {
    this.searchEl = this.search.nativeElement.value;

    if (this.search.nativeElement.value==='') {
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
  }

  // key: string = 'title';
  // reverse: boolean = false;
  // onSorting(key) {
  //   this.key = key;
  //   this.reverse = !this.reverse;
  // }

  sorting() {
    this.books.sort((a, b) => (a.volumeInfo.title > b.volumeInfo.title) ? 1 : -1)
    // console.log(this.books)

  }

  sortingDate(){
    this.books.sort((a, b) => (a.volumeInfo.publishedDate > b.volumeInfo.publishedDate) ? 1 : -1)
  }

}
