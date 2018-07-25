import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Books } from '../../app/books';
import { BooksService } from '../../app/books.service';

@Component({
  selector: 'app-adults',
  templateUrl: './adults.component.html',
  styleUrls: ['./adults.component.css']
})
export class AdultsComponent implements OnInit {
  sub: any;
  bookList: any = [];
  constructor(
    private route: ActivatedRoute, 
    private booksService: BooksService
  ) { }

  ngOnInit() {
    this.getAdultBooks();
  }

  getAdultBooks(): void {
    this.booksService.getAdultBooks()
    .subscribe(
      (books) => {
        this.bookList = books.json();
      });

  }

}
