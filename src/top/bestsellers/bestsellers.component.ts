import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Books } from '../../app/books';
import { BooksService } from '../../app/books.service';
@Component({
  selector: 'app-bestsellers',
  templateUrl: './bestsellers.component.html',
  styleUrls: ['./bestsellers.component.css']
})
export class BestsellersComponent implements OnInit {
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
