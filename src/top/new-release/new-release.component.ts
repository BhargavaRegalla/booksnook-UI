import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Books } from '../../app/books';
import { BooksService } from '../../app/books.service';

@Component({
  selector: 'app-new-release',
  templateUrl: './new-release.component.html',
  styleUrls: ['./new-release.component.css']
})
export class NewReleaseComponent implements OnInit {
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
