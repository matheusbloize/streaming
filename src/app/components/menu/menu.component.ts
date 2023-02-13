import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.addEventListener('scroll', ()=> {
      scrollY >= 20 ?
      document.querySelector<HTMLElement>('.menu-container').style.backgroundColor = '#222'
      :
      document.querySelector<HTMLElement>('.menu-container').style.backgroundColor = 'transparent' 
    })
  }

  showProfile(){
    document.querySelector<HTMLElement>('.showProfile').style.display = 'flex'
    document.querySelector<HTMLElement>('.switchTheme').style.display = 'flex'
  }
  
  leaveProfile(){
    document.querySelector<HTMLElement>('.showProfile').style.display = 'none'
    document.querySelector<HTMLElement>('.switchTheme').style.display = 'none'
  }

  switchTheme(){
    document.querySelector<HTMLElement>('.switchTheme .pointer').style.marginLeft === '' || document.querySelector<HTMLElement>('.switchTheme .pointer').style.marginLeft === '2vw'  ? document.querySelector<HTMLElement>('.switchTheme .pointer').style.marginLeft = '-2vw' : document.querySelector<HTMLElement>('.switchTheme .pointer').style.marginLeft = '2vw'
    if(document.body.style.backgroundColor === '' || document.body.style.backgroundColor === 'rgb(26, 25, 25)'){
      document.body.style.backgroundColor = '#e8dcdc'
      document.addEventListener('scroll', ()=> {
        scrollY >= 20 ? 
        document.querySelector<HTMLElement>('.menu-container').style.backgroundColor = '#ccc'
        :
        document.querySelector<HTMLElement>('.menu-container').style.backgroundColor = 'transparent' 
      })
      if(location.pathname === '/streaming/' || location.pathname === '/') {
        document.querySelectorAll<HTMLElement>('app-home .separator')[0].style.color = '#333'
        document.querySelectorAll<HTMLElement>('app-home .separator')[1].style.color = '#333'
        document.querySelectorAll<HTMLElement>('app-home .separator')[2].style.color = '#333'
        for(let i = 0; i < document.querySelectorAll('.other-movie .image-cover').length; i++) {
          document.querySelectorAll<HTMLElement>('.other-movie .image-cover')[i].style.opacity = '.9'
        }
        document.querySelector<HTMLElement>('.main-movie img').style.opacity = '.9'
      } else if (location.pathname === '/list') {
        document.querySelector<HTMLElement>('.list-container').style.backgroundColor = '#e8dcdc'
      } else if (location.pathname === '/search') {
        document.querySelector<HTMLElement>('.search-container').style.backgroundColor = '#e8dcdc'
      }
      document.querySelector<HTMLElement>('.showProfile').style.backgroundColor = '#ccc'
      document.querySelector<HTMLElement>('.footer-container').style.backgroundColor = '#ccc'
    } else {
      document.body.style.backgroundColor = '#1a1919'
      document.addEventListener('scroll', ()=> {
        scrollY >= 20 ? 
        document.querySelector<HTMLElement>('.menu-container').style.backgroundColor = '#222'
        :
        document.querySelector<HTMLElement>('.menu-container').style.backgroundColor = 'transparent' 
      })
      if(location.pathname === '/streaming/' || location.pathname === '/'){
        document.querySelectorAll<HTMLElement>('app-home .separator')[0].style.color = '#ccc'
        document.querySelectorAll<HTMLElement>('app-home .separator')[1].style.color = '#ccc'
        document.querySelectorAll<HTMLElement>('app-home .separator')[2].style.color = '#ccc'
        for(let i = 0; i < document.querySelectorAll('.other-movie .image-cover').length; i++) {
          document.querySelectorAll<HTMLElement>('.other-movie .image-cover')[i].style.opacity = '.7'
        }
        document.querySelector<HTMLElement>('.main-movie img').style.opacity = '.7'
      } else if (location.pathname === '/list') {
        document.querySelector<HTMLElement>('.list-container').style.backgroundColor = 'rgb(26, 25, 25)'
      } else if (location.pathname === '/search') {
        document.querySelector<HTMLElement>('.search-container').style.backgroundColor = 'rgb(26, 25, 25)'
      }
      document.querySelector<HTMLElement>('.showProfile').style.backgroundColor = 'rgb(34, 34, 34)'
      document.querySelector<HTMLElement>('.footer-container').style.backgroundColor = 'rgb(34, 34, 34)'
    }
  }

}
