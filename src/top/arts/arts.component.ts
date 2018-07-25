import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from '../../app/books.service';

@Component({
  selector: 'app-arts',
  templateUrl: './arts.component.html',
  styleUrls: ['./arts.component.css']
})
export class ArtsComponent implements OnInit {
  sub: any;
  books : any = [];
  bookList: any = [];
  constructor(
    private route: ActivatedRoute, 
    private booksService: BooksService
  ) { }

  ngOnInit() {
    this.getArtsBooks();
  }

  getArtsBooks(): void {
    this.booksService.getArtsBooks()
    .subscribe(
      (books) => {
        this.bookList = books.json();
      });
    }
  }
