import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { TopNavComponent } from '../home/top-nav/top-nav.component';
import { HomeSliderComponent } from '../home/home-slider/home-slider.component';
import { TopComponent } from '../top/top.component';
import { AppRoutingModule }     from './app-routing.module';
import { HomeMainComponent } from '../home/home-main/home-main.component';
import { FooterComponent } from '../home/footer/footer.component';
import { LoginSignupComponent } from '../login/login-signup/login-signup.component';
import { NewReleaseComponent } from '../top/new-release/new-release.component';
import { SideCategoryComponent } from '../home/side-category/side-category.component';
import { AdultsComponent } from '../top/adults/adults.component';
import { KidsBooksComponent } from '../top/kids-books/kids-books.component';
import { BestsellersComponent } from '../top/bestsellers/bestsellers.component';
import { BooksDetailsComponent } from '../top/books-details/books-details.component';
import { MycartComponent } from '../checkout/mycart/mycart.component';
import { PaymentComponent } from '../checkout/payment/payment.component';
import { OrderPlacedComponent } from '../checkout/order-placed/order-placed.component';
import { ArtsComponent } from '../top/arts/arts.component';
import { BiographiesComponent } from '../top/biographies/biographies.component';
import { EntertainmentComponent } from '../top/entertainment/entertainment.component';
import { ComputerComponent } from '../top/computer/computer.component';
import { HistoryComponent } from '../top/history/history.component';
import { TopbestComponent } from '../top/topbest/topbest.component'
// import { loginComponent } from '../checkout/login/login.component' ;

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    HomeSliderComponent,
    HomeMainComponent,
    FooterComponent,
    LoginSignupComponent,
    NewReleaseComponent,
    SideCategoryComponent,
    AdultsComponent,
    KidsBooksComponent,
    BestsellersComponent,
    BooksDetailsComponent,
    TopComponent,
    MycartComponent,
    PaymentComponent ,
    OrderPlacedComponent,
    ArtsComponent,
    BiographiesComponent,
    EntertainmentComponent,
    ComputerComponent,
    HistoryComponent,
    TopbestComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    HttpClientInMemoryWebApiModule.forRoot(
    InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
