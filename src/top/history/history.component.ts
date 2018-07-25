import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from '../../app/books.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  sub: any;
  books : any = [];
  bookList: any = [];
  constructor(
    private route: ActivatedRoute, 
    private booksService: BooksService
  ) { }

  ngOnInit() {
    this.getHistBooks();
  }

  getHistBooks(): void {
    this.booksService.getHistBooks()
    .subscribe(
      (books) => {
        this.bookList = books.json();
      });
    }
  }

