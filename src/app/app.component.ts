import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  static resArr: string[]
  
  static windowScroll() {
    setTimeout(()=>{
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 100)
  }

  ngOnInit(): void {
    AppComponent.resArr = []
    document.querySelector('span').parentElement.removeChild(document.querySelector('span'))
    AppComponent.windowScroll()
  }
  title = 'streaming';
}
