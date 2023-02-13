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
      if (screen.width > 1800) {
        this.spaceBetween = -1100
      } else if (screen.width > 1700 && screen.width < 1800) {
        this.spaceBetween = -1000
      } else if (screen.width > 1500 && screen.width < 1700) {
        this.spaceBetween = -900
      } else if(screen.width > 1400 && screen.width < 1500){
        this.spaceBetween = -850
      }  else if (screen.width > 1300 && screen.width < 1400) {
        this.spaceBetween = -800
      } else if (screen.width > 1200 && screen.width < 1300) {
        this.spaceBetween = -700
      } else if (screen.width < 1200 && screen.width > 1000) {
        this.spaceBetween = -600
      } else if (screen.width < 1000 && screen.width > 900) {
        this.spaceBetween = -550
      } else if (screen.width < 900 && screen.width > 800) {
        this.spaceBetween = -500
        this.slidesPerView = 4
      } else if (screen.width <= 800 && screen.width > 600) {
        this.spaceBetween = -350
        this.slidesPerView = 3
      } else if (screen.width < 600 && screen.width > 420) {
        this.spaceBetween = -250
        this.slidesPerView = 3
      } else if (screen.width <= 420) {
        this.spaceBetween = -150
        this.slidesPerView = 3
      }
    }, 100)
  }
}
