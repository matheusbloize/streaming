import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Swiper3Component } from './swiper3.component';

describe('Swiper3Component', () => {
  let component: Swiper3Component;
  let fixture: ComponentFixture<Swiper3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Swiper3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Swiper3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
