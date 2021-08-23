import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MovieService } from '../Service/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient, private service: MovieService) { }

  books: any;
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


  onKeyEnter() {
    this.searchEl = this.search.nativeElement.value;
    console.log(this.searchEl)
    this.service.getBooksBySearch(this.searchEl).subscribe(r=>{
      this.books = r.items
      // console.log(r)
    },error=>{
      console.log(error)
    })
  }
  onRest(){
    this.getbook();
  }

}
