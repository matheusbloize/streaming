import { Component, OnInit, Input, AfterContentChecked } from '@angular/core';
import { AppComponent } from '../../app.component'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterContentChecked {
  @Input()
  teste: string = "0"

  @Input()
  token: string = ''

  constructor() { }

  ngOnInit(): void {
    AppComponent.windowScroll()
    document.querySelector<HTMLElement>('.menu-container').style.position = 'fixed'
  }

  ngAfterContentChecked(): void {
    if(scrollX > 0) {
      scrollTo(0, scrollY)
    }
  }
}
