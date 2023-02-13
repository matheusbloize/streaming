import { Component, OnInit, AfterContentInit } from '@angular/core';
import { MovieData } from 'src/app/models/movieData';
import { ShowData } from 'src/app/models/showData';
import { MovieService } from 'src/app/services/movie.service';
import { ShowService } from 'src/app/services/show.service';
import { AppComponent } from 'src/app/app.component';
import { ListComponent } from '../list/list.component';

@Component({
  moduleId: module.id,
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit, AfterContentInit {
  movie: MovieData
  show: ShowData
  videoTrailer: string
  setNewArr: string[]

  constructor(private MovieService: MovieService, private ShowService: ShowService) {
    this.movie = {
      id: 0,
      title: '',
      overview: '',
      runtime: '',
      backdrop_path: ''
    }
    this.show = {
      id: 0,
      episodes: '',
      name: '',
      overview: '',
      number_of_episodes: 0,
      backdrop_path: ''
    }
  }

  ngOnInit(): void {
    this.setNewArr = [...new Set(this.setNewArr)]
    AppComponent.windowScroll()
    document.querySelector<HTMLElement>('app-footer .footer-container').style.opacity = '0'
    setTimeout(() => {
      document.querySelector('.movie-content .loading').parentElement.removeChild(document.querySelector('.movie-content .loading'))
    }, 100)
    setTimeout(() => {
      document.querySelector<HTMLElement>('app-footer .footer-container').style.opacity = '1'
    }, 2000)
    let res = ''
    location.pathname.length > 8 ? res = location.pathname.split('').slice(-8).join('') : res = location.pathname.split('').slice(-7).join('')
    switch (res) {
      case '/movie/1': case 'movie/1':
        this.getMovie("414906")
        break
      case '/movie/2': case 'movie/2':
        this.getMovie("315162")
        break
      case '/movie/3': case 'movie/3':
        this.getMovie("436270")
        break
      case '/movie/4': case 'movie/4':
        this.getMovie("76600")
        break
      case '/movie/5': case 'movie/5':
        this.getTv("100088")
        break
      case '/movie/6': case 'movie/6':
        this.getTv("82856")
        break
      case '/movie/7': case 'movie/7':
        this.getTv("108978")
        break
      case '/movie/8': case 'movie/8':
        this.getTv("90669")
        break
      case '/movie/9': case 'movie/9':
        this.getTv("83867")
        break
      case '/movie/10': case 'movie/10':
        this.getTv("119051")
        break
      case '/movie/11': case 'movie/11':
        this.getMovie("475557")
        break
      case '/movie/12': case 'movie/12':
        this.getMovie("872585")
        break
      case '/movie/13': case 'movie/13':
        this.getMovie("263115")
        break
      case '/movie/14': case 'movie/14':
        this.getTv("66732")
        break
      case '/movie/15': case 'movie/15':
        this.getMovie("894205")
        break
      case '/movie/16': case 'movie/16':
        this.getMovie("791373")
        break
      case '/movie/17': case 'movie/17':
        this.getTv("92830")
        break
      case '/movie/18': case 'movie/18':
        this.getMovie("157336")
        break
      case '/movie/19': case 'movie/19':
        this.getMovie("673")
        break
      case '/movie/20': case 'movie/20':
        this.getMovie("141")
        break
      case '/movie/21': case 'movie/21':
        this.getTv("110316")
        break
      case '/movie/22': case 'movie/22':
        this.getTv("70523")
        break
      case '/movie/23': case 'movie/23':
        this.getMovie("1895")
        break
      case '/movie/24': case 'movie/24':
        this.getTv("62560")
        break
      case '/movie/25': case 'movie/25':
        this.getTv("1396")
        break
    }
  }

  ngAfterContentInit(): void {
    let res = ''
    location.pathname.length > 18 ? res = location.pathname.split('').slice(-2).join('') : res = location.pathname.split('').slice(-1).join('')
    if (res === this.setNewArr[this.setNewArr.lastIndexOf(res)]) {
      document.querySelector<HTMLButtonElement>('.side button').disabled = true
      document.querySelector<HTMLButtonElement>('.side button').style.cursor = 'no-drop'
    }
  }

  addToList() {
    let regex = new RegExp(/([a-zA-Z\.\*\-\/]{0,})(\/movie\/\d\/*)/)
    if (regex.test(location.pathname)) {
      let res = ''
      location.pathname.length > 18 ? res = location.pathname.split('').slice(-2).join('') : res = location.pathname.split('').slice(-1).join('')
      AppComponent.resArr.push(res)
      this.setNewArr = [...new Set(AppComponent.resArr)]
      ListComponent.takeId(res)
      setInterval(() => {
        this.ngAfterContentInit()
      }, 1000)
      document.querySelector<HTMLButtonElement>('.side button').disabled = !document.querySelector<HTMLButtonElement>('.side button').disabled
      document.querySelector<HTMLButtonElement>('.side button').style.cursor = 'no-drop'
      alert(`${document.querySelector('app-movie .movie-content h2').textContent} adicionado à sua lista!`)
    } else {
      alert('Erro, favor alertar sobre o ocorrido.')
    }
  }

  getMovie(id: string) {
    this.MovieService.getMovie(id).subscribe(
      {
        next: (res) => {
          this.movie = {
            id: res.id,
            title: res.title,
            overview: res.overview,
            backdrop_path: `https://image.tmdb.org/t/p/original${res.backdrop_path}`,
            runtime: `${res.runtime} min`
          }
          setTimeout(() => {
            const img = document.createElement('img')
            img.src = this.movie.backdrop_path
            img.style.opacity = '.8'
            img.style.height = '100vh'
            img.alt = 'Logo do Filme'
            const style = document.createElement('style')
            style.innerHTML = `
            @keyframes imgCover {
              0% {
                object-position: 0%
              } 25% {
                object-position: 25%
              } 50% {
                object-position: 50%
              } 75% {
                object-position: 75%
              } 90% {
                object-position: 100%
              } 100% {
                object-position: 0%
              }
            }

            img {
              object-fit: cover;
              animation: imgCover 5s ease infinite;
            }
            `
            img.appendChild(style)
            document.querySelector('app-movie .movie-content').prepend(img)
            document.querySelector('h2').textContent = this.movie.title
            document.querySelector('span').textContent = this.movie.runtime
            document.querySelector<HTMLElement>('.side a').style.display = 'inline-block'
            document.querySelector('.side a').textContent = 'Assistir'
            document.querySelector<HTMLElement>('button').style.display = 'inline-block'
            document.querySelector('button').textContent = '+'
            document.querySelector('p').textContent = this.movie.overview
            document.querySelector<HTMLElement>('app-footer .footer-container').style.display = 'block'
          }, 100)
        },
        error: () => {
          alert('Erro, se possível nos informe o ocorrido!')
          window.open('https://www.linkedin.com/in/matheus-bloize/')
        }
      }
    )
  }

  getTv(id: string) {
    this.ShowService.getTv(id).subscribe(
      {
        next: (res) => {
          this.show = {
            id: res.id,
            name: res.name,
            overview: res.overview,
            episodes: `${res.number_of_episodes} episodes`,
            number_of_episodes: res.number_of_episodes,
            backdrop_path: `https://image.tmdb.org/t/p/original${res.backdrop_path}`
          }
          setTimeout(() => {
          const img = document.createElement('img')
          img.src = this.show.backdrop_path
          img.style.opacity = '.5'
          img.style.height = '100vh'
          img.alt = 'Logo do Filme'
          const style = document.createElement('style')
          style.innerHTML = `
            @keyframes imgCover {
              0% {
                object-position: 0%
              } 25% {
                object-position: 25%
              } 50% {
                object-position: 50%
              } 75% {
                object-position: 75%
              } 90% {
                object-position: 100%
              } 100% {
                object-position: 0%
              }
            }

            img {
              object-fit: cover;
              animation: imgCover 5s ease infinite;
            }
            `
          img.appendChild(style)
          document.querySelector('app-movie .movie-content').prepend(img)
          document.querySelector('h2').textContent = this.show.name
          document.querySelector('span').textContent = this.show.episodes
          document.querySelector<HTMLElement>('.side a').style.display = 'inline-block'
          document.querySelector('.side a').textContent = 'Assistir'
          document.querySelector<HTMLElement>('button').style.display = 'inline-block'
          document.querySelector('button').textContent = '+'
          document.querySelector('p').textContent = this.show.overview
          document.querySelector<HTMLElement>('app-footer .footer-container').style.display = 'block'
          }, 100)
        },
        error: () => {
          alert('Erro, se possível nos informe o ocorrido!')
          window.open('https://www.linkedin.com/in/matheus-bloize/')
        }
      }
    )
  }

  showMovie() {
    document.querySelector<HTMLElement>('.movie-show').style.display = 'flex'
    AppComponent.windowScroll()
    document.body.style.overflowY = 'hidden'
    setTimeout(() => {
      document.querySelector<HTMLElement>('.loading').style.display = 'none'
      document.querySelector<HTMLElement>('.movie-alert').style.display = 'flex'
      document.querySelector<HTMLElement>('.close').style.display = 'block'
    }, 3000)
  }

  closeAlert() {
    document.querySelector<HTMLElement>('.close').style.display = 'none'
    document.querySelector<HTMLElement>('.movie-alert').style.display = 'none'
    setTimeout(() => {
      document.querySelector<HTMLElement>('.movie-trailer').style.display = 'flex'
    }, 1000)
    document.querySelector<HTMLElement>('.returnHome').style.display = 'block'
    this.showIframe()
  }

  overflow() {
    document.body.style.overflowY = 'scroll'
  }

  showIframe() {
    let res = ''
    location.pathname.length > 8 ? res = location.pathname.split('').slice(-8).join('') : res = location.pathname.split('').slice(-7).join('')
    switch (res) {
      case '/movie/1': case 'movie/1':
        this.videoTrailer = 'https://www.youtube.com/embed/rsQEor4y2hg'
        break
      case '/movie/2': case 'movie/2':
        this.videoTrailer = 'https://www.youtube.com/embed/qtHcEfpYIow'
        break
      case '/movie/3': case 'movie/3':
        this.videoTrailer = 'https://www.youtube.com/embed/2_0H2Z1GTLM'
        break
      case '/movie/4': case 'movie/4':
        this.videoTrailer = 'https://www.youtube.com/embed/x5pZI-DmtrE'
        break
      case '/movie/5': case 'movie/5':
        this.videoTrailer = 'https://www.youtube.com/embed/lW5kiEUVlpo'
        break
      case '/movie/6': case 'movie/6':
        this.videoTrailer = 'https://www.youtube.com/embed/5gWQXeJTjCg'
        break
      case '/movie/7': case 'movie/7':
        this.videoTrailer = 'https://www.youtube.com/embed/BPeKW29kJT8'
        break
      case '/movie/8': case 'movie/8':
        this.videoTrailer = 'https://www.youtube.com/embed/hxGXPirkFGU'
        break
      case '/movie/9': case 'movie/9':
        this.videoTrailer = 'https://www.youtube.com/embed/YeZLTbLfM1c'
        break
      case '/movie/10': case 'movie/10':
        this.videoTrailer = 'https://www.youtube.com/embed/Di310WS8zLk'
        break
      case '/movie/11': case 'movie/11':
        this.videoTrailer = 'https://www.youtube.com/embed/ntSvI2qaRxU'
        break
      case '/movie/12': case 'movie/12':
        this.videoTrailer = 'https://www.youtube.com/embed/kEGlCYF5gaU'
        break
      case '/movie/13': case 'movie/13':
        this.videoTrailer = 'https://www.youtube.com/embed/RWSuAC9CYxo'
        break
      case '/movie/14': case 'movie/14':
        this.videoTrailer = 'https://www.youtube.com/embed/yTX0HxTq9wo'
        break
      case '/movie/15': case 'movie/15':
        this.videoTrailer = 'https://www.youtube.com/embed/8uzyWaH68XY'
        break
      case '/movie/16': case 'movie/16':
        this.videoTrailer = 'https://www.youtube.com/embed/BifA90UAQtg'
        break
      case '/movie/17': case 'movie/17':
        this.videoTrailer = 'https://www.youtube.com/embed/ZNtc-y66d8w'
        break
      case '/movie/18': case 'movie/18':
        this.videoTrailer = 'https://www.youtube.com/embed/2LqzF5WauAw'
        break
      case '/movie/19': case 'movie/19':
        this.videoTrailer = 'https://www.youtube.com/embed/uDiawFy4NJc'
        break
      case '/movie/20': case 'movie/20':
        this.videoTrailer = 'https://www.youtube.com/embed/bzLn8sYeM9o'
        break
      case '/movie/21': case 'movie/21':
        this.videoTrailer = 'https://www.youtube.com/embed/WZCxI1qv310'
        break
      case '/movie/22': case 'movie/22':
        this.videoTrailer = 'https://www.youtube.com/embed/ESEUoa-mz2c'
        break
      case '/movie/23': case 'movie/23':
        this.videoTrailer = 'https://www.youtube.com/embed/5UnjrG_N8hU'
        break
      case '/movie/24': case 'movie/24':
        this.videoTrailer = 'https://www.youtube.com/embed/Oc-AsN7d1wg'
        break
      case '/movie/25': case 'movie/25':
        this.videoTrailer = 'https://www.youtube.com/embed/VFLkMDEO-Xc'
        break
    }
  }
}
