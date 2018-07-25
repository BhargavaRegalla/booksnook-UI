import { NgModule } from '@angular/core';
import { Routes, RouterModule  } from '@angular/router';
import { HomeMainComponent } from '../home/home-main/home-main.component';
import { NewReleaseComponent } from '../top/new-release/new-release.component';
import { SideCategoryComponent } from '../home/side-category/side-category.component';
import { AdultsComponent } from '../top/adults/adults.component';
import { KidsBooksComponent } from '../top/kids-books/kids-books.component';
import { BestsellersComponent } from '../top/bestsellers/bestsellers.component';
import { BooksDetailsComponent } from '../top/books-details/books-details.component';
import {PaymentComponent } from '../checkout/payment/payment.component';
import { ArtsComponent } from '../top/arts/arts.component';
import { BiographiesComponent } from '../top/biographies/biographies.component';
import { ComputerComponent } from '../top/computer/computer.component';
import { EntertainmentComponent } from '../top/entertainment/entertainment.component';
import { HistoryComponent } from '../top/history/history.component';
import { TopComponent } from '../top/top.component';
import { TopbestComponent } from '../top/topbest/topbest.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeMainComponent },
    { path: 'books-detail', component: BooksDetailsComponent },
    { path: 'books-details/:bookid', component: BooksDetailsComponent }, 
    { path: 'new-release', component: NewReleaseComponent },
    { path: 'side-category', component: SideCategoryComponent },
    { path: 'adults', component: AdultsComponent },
    { path: 'kids-books', component: KidsBooksComponent },
    { path: 'bestsellers', component: BestsellersComponent },
    { path: 'payment', component: PaymentComponent },
    { path: 'arts', component: ArtsComponent },
    {path: 'biographies', component:BiographiesComponent},
    {path: 'computer', component:ComputerComponent},
    {path: 'entertainment', component:EntertainmentComponent},
    {path: 'history', component:HistoryComponent},
    {path:'top',component:TopComponent},
    {path:'topbest',component:TopbestComponent}
  ];
  
  @NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
  })
  export class AppRoutingModule {}
  