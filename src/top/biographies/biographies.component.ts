import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from '../../app/books.service';

@Component({
  selector: 'app-biographies',
  templateUrl: './biographies.component.html',
  styleUrls: ['./biographies.component.css']
})
export class BiographiesComponent implements OnInit {
  sub: any;
  books : any = [];
  bookList: any = [];
  constructor(
    private route: ActivatedRoute, 
    private booksService: BooksService
  ) { }

  ngOnInit() {
    this.getBioBooks();
  }

  getBioBooks(): void {
    this.booksService.getBioBooks()
    .subscribe(
      (books) => {
        this.bookList = books.json();
      });
    }
  }

