import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainMovieComponent } from './components/main-movie/main-movie.component';
import { OtherMovieComponent } from './components/other-movie/other-movie.component';
import { MovieComponent } from './pages/movie/movie.component';
import { SearchComponent } from './pages/search/search.component';
import { SwiperModule } from "swiper/angular";
import { Swiper1Component } from './components/sliders/swiper1/swiper1.component';
import { Swiper2Component } from './components/sliders/swiper2/swiper2.component';
import { Swiper3Component } from './components/sliders/swiper3/swiper3.component';
import { ListComponent } from './pages/list/list.component';
import { SafePipe } from './safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    FooterComponent,
    MainMovieComponent,
    OtherMovieComponent,
    MovieComponent,
    SearchComponent,
    Swiper1Component,
    Swiper2Component,
    Swiper3Component,
    ListComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
