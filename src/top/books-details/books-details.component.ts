import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from '../../app/books.service';

@Component({
  selector: 'app-books-details',
  templateUrl: './books-details.component.html',
  styleUrls: ['./books-details.component.css']
})
export class BooksDetailsComponent implements OnInit {
  sub: any;
  bookdetail: any = [];
  showbookdetail='';
  constructor(
    private route: ActivatedRoute, 
    private booksService: BooksService
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(
      (params)=> {
        console.log(params['bookid']);        
        this.getAdultBooks(params['bookid']);
      }
    )
  }

  getAdultBooks(id): void {
    this.booksService.getBooksbyid(id )
    .subscribe(
      (books) => {
        this.bookdetail = books.json();
        this.showbookdetail= 'true';      
        console.log(this.bookdetail.bookName);
      });
  }
}
