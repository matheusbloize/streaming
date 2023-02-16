import { Component, OnInit, AfterContentInit } from '@angular/core';
import { AppComponent } from '../../app.component'
import { arrayData } from '../../../assets/arrayData'
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, AfterContentInit {
  static listArr: any[] = []
  teste: Function

  constructor(private router: Router) { }

  ngOnInit(): void {
    AppComponent.windowScroll()
  }

  static takeId(res: string) {
    this.makeList(res)
  }

  static makeList(id: string) {
    const div = document.createElement('div')
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
    ListComponent.updateList(div)
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
    Array.from(document.querySelectorAll('.list-content')).forEach((item) =>{
      item.addEventListener('click', (e: Event) => {
        const target = e.target as HTMLImageElement
        this.router.navigate(['movie', target.id])
      })
    })
  }
}


