import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Books } from '../../app/books';
import { BooksService } from '../../app/books.service';

@Component({
  selector: 'app-kids-books',
  templateUrl: './kids-books.component.html',
  styleUrls: ['./kids-books.component.css']
})
export class KidsBooksComponent implements OnInit {
  sub: any;
  books : any = [];
  bookList: any = [];
  constructor(
    private route: ActivatedRoute, 
    private booksService: BooksService
  ) { }

  ngOnInit() {
    this.getKidsBooks();
  }

  getKidsBooks(): void {
    this.booksService.getKidsBooks()
    .subscribe(
      (books) => {
        this.bookList = books.json();
      });
}
}