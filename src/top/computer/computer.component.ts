import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from '../../app/books.service';

@Component({
  selector: 'app-computer',
  templateUrl: './computer.component.html',
  styleUrls: ['./computer.component.css']
})
export class ComputerComponent implements OnInit {
  sub: any;
  books : any = [];
  bookList: any = [];
  constructor(
    private route: ActivatedRoute, 
    private booksService: BooksService
  ) { }

  ngOnInit() {
    this.getCompBooks();
  }

  getCompBooks(): void {
    this.booksService.getCompBooks()
    .subscribe(
      (books) => {
        this.bookList = books.json();
      });
    }
  }

