import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from '../app/books.service';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {
  sub: any;
  books : any = [];
  bookList: any = [];

  constructor(
    private route: ActivatedRoute, 
    private booksService: BooksService
  ) { }

  ngOnInit() {
    this.getNewBooks();
  }

  getNewBooks(): void {
    this.booksService.getNewBooks()
    .subscribe(
      (books) => {
        this.bookList = books.json();
      });

  }

}
