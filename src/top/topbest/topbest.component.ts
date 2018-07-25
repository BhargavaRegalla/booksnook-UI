import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from '../../app/books.service';

@Component({
  selector: 'app-topbest',
  templateUrl: './topbest.component.html',
  styleUrls: ['./topbest.component.css']
})
export class TopbestComponent implements OnInit {
  sub: any;
  books : any = [];
  bookList: any = [];

  constructor(
    private route: ActivatedRoute, 
    private booksService: BooksService
  ) { }

  ngOnInit() {
    this.getBestBooks();
  }

  getBestBooks(): void {
    this.booksService.getBestBooks()
    .subscribe(
      (books) => {
        this.bookList = books.json();
      });

  }

}
