import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import SwiperCore, { FreeMode, Pagination } from 'swiper';

SwiperCore.use([FreeMode, Pagination]);

@Component({
  selector: 'app-swiper1',
  templateUrl: './swiper1.component.html',
  styleUrls: ['./swiper1.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class Swiper1Component implements OnInit {
  spaceBetween: number = 0
  slidesPerView: number = 0

  constructor() {
  }

  ngOnInit(): void {
    this.spaceBetween = -1100
    this.slidesPerView = 4
    setInterval(() => {
      if (innerWidth > 2000) {
        this.spaceBetween = -800
      } else if (innerWidth > 1600 && innerWidth < 2000 && innerHeight > 1200) {
        this.spaceBetween = -600
      } else if (innerWidth > 1200 && innerWidth <= 1600 && innerHeight > 1000) {
        this.spaceBetween = -400
      } else if (innerWidth > 950 && innerWidth <= 1200 && innerHeight > 1000) {
        this.spaceBetween = -200
        this.slidesPerView = 4
      } else if (innerWidth > 420 && innerWidth <= 950 && innerHeight > 1000) {
        this.spaceBetween = -50
        this.slidesPerView = 4
      }  else if (innerWidth > 1800 && innerWidth < 2000) {
        this.spaceBetween = -1100
      } else if (innerWidth > 1500 && innerWidth < 1800) {
        this.spaceBetween = -900
      } else if (innerWidth > 1200 && innerWidth < 1500) {
        this.spaceBetween = -700
      } else if (innerWidth > 900 && innerWidth < 1200) {
        this.spaceBetween = -500
      } else if (innerWidth > 700 && innerWidth < 900) {
        this.spaceBetween = -200
      } else if (innerWidth > 420 && innerWidth < 700) {
        this.spaceBetween = -100
        this.slidesPerView = 4
      } else if (innerWidth <= 420) {
        this.spaceBetween = -150
        this.slidesPerView = 3
      }
    }, 100)
  }
}
