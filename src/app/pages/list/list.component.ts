import { Component, OnInit, AfterContentInit } from '@angular/core';
import { AppComponent } from '../../app.component'
import { arrayData } from '../../../assets/arrayData'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, AfterContentInit {
  static listArr: any[] = []

  constructor() { }

  ngOnInit(): void {
    AppComponent.windowScroll()
  }

  static takeId(res: string) {
    this.makeList(res)
  }

  static makeList(id: string) {
    const div = document.createElement('div')
    const coverElement = document.createElement('div')
    coverElement.classList.add('coverElement')
    coverElement.innerHTML = `
    <div class="loading"></div>
    `
    const coverElementStyle = document.createElement('style')
    coverElementStyle.innerHTML = 
    `
      .coverElement {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 99;
        background-color: #66FFD6;
      }

      .loading {
        top: 50%;
        left: 50%;
      }
    `
    coverElement.appendChild(coverElementStyle)
    div.addEventListener('click', (e) => {
      document.body.appendChild(coverElement)
      let interval = setInterval(() => {
        if (location.href !== `${location.origin}/streaming/movie/${(e.target as HTMLImageElement).getAttribute('id')}`) {
          history.back()
        }
      }, 200)
      setTimeout(()=>{
        coverElement.style.display = 'none'
        clearInterval(interval)
      }, 3000)
    })
    div.innerHTML = `
    <img src="${arrayData[parseInt(id) - 1]['imageCover']}" id="${arrayData[parseInt(id) - 1]['id']}"></img>
    `
    const imgStyle = document.createElement('style')
    imgStyle.innerHTML = `
    .list-content img {
      border-radius: 10px;
      border: 3px solid transparent;
      transition: .3s ease-out scale;
      cursor: pointer;
      width: 22vw;
      height: 25vh;
      object-position: center;
    }
    .list-content img:hover {
      border: 3px solid #fff;
      scale: 1.1;
    }
    @media screen and (max-width: 1200px) {
      .list-content img {
          width: 22vw;
      }
    }
  
    @media screen and (max-width: 800px) {
      .list-content img {
          width: 29vw;
      }
    }
  
    @media screen and (max-width: 420px) {
      .list-title {
          margin-top: 20%;
      }
  
      .list-title h2 {
          font-size: 2em;
      }
    }
    `
    div.appendChild(imgStyle)
    this.updateList(div)
  }

  static updateList(div: any) {
    div.classList.add('list-content')
    this.listArr.push(div)
  }

  ngAfterContentInit(): void {
    document.querySelector<HTMLElement>('.menu-container').style.position = 'absolute'
    if (ListComponent.listArr.length > 0) {
      document.querySelector('span').parentElement.removeChild(document.querySelector('span'))
    }
    if (ListComponent.listArr.length > 0) {
      for (let i = 1; i < ListComponent.listArr.length; i++) {
        if (ListComponent.listArr[i - 1].querySelector('img').getAttribute('id') === ListComponent.listArr[ListComponent.listArr.length - 1].querySelector('img').getAttribute('id')) {
          ListComponent.listArr.pop()
        }
      }
    }
    let uniqueArr = [...new Set(ListComponent.listArr)]
    uniqueArr.forEach(item => document.querySelector('.list-content-grid').appendChild(item))
  }
}
