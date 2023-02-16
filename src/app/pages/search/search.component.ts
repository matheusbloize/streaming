import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { ShowService } from 'src/app/services/show.service';
import { MovieData } from 'src/app/models/movieData';
import { ShowData } from 'src/app/models/showData';
import { MovieSearchData } from 'src/app/models/movieSearchData';
import { TvSearchData } from 'src/app/models/showSearchData';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, AfterContentChecked {
  listArr: any[] = []
  movie: MovieData
  show: ShowData
  movieSearch: MovieSearchData
  tvSearch: TvSearchData

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
    this.movieSearch = {
      results: []
    }
    this.tvSearch = {
      results: []
    }
  }

  ngOnInit(): void {
    AppComponent.windowScroll()
  }

  getStream() {
    document.querySelector<HTMLDivElement>('.cover').style.display = 'block'
    document.querySelector<HTMLDivElement>('.loading').style.display = 'flex'
    this.searchMovie(document.querySelector<HTMLInputElement>('.search-input').value)
    this.searchTv(document.querySelector<HTMLInputElement>('.search-input').value)
    document.querySelector<HTMLDivElement>('.cover').style.height = '332%'
    if(document.body.style.backgroundColor === '' || document.body.style.backgroundColor === 'rgb(26, 25, 25)') {
      document.querySelector<HTMLDivElement>('.cover').style.backgroundColor = 'rgb(26, 25, 25)'
    } else {
      document.querySelector<HTMLDivElement>('.cover').style.backgroundColor = 'rgb(232, 220, 220)'
    }
    document.querySelector<HTMLInputElement>('.search-input').value = ""
    setTimeout(()=>{
      document.querySelector<HTMLDivElement>('.loading').style.display = 'none'
      document.querySelector<HTMLDivElement>('.cover').style.display = 'none'
    }, 2000)
  }

  ngAfterContentChecked(): void {
    if (this.listArr.length > 0 && document.querySelectorAll('.search-content').length > 0) {
      document.querySelector<HTMLElement>('.nothing').style.display = 'none'
    }
    document.querySelector<HTMLElement>('.menu-container').style.position = 'absolute'
  }

  searchMovie(query: string) {
    if(query === '') {
      Array.from(document.querySelectorAll('.search-content')).forEach(item => {
        item.parentElement.removeChild(item)
      })
      document.querySelector<HTMLElement>('.nothing').style.display = 'block'
    } else {
      this.MovieService.searchMovie(query).subscribe(
        {
          next: (res) => {
            for (let i = 0; i < res.results.length; i++) {
              this.movieSearch = {
                results: res.results
              }
              this.listArr.push(res.results[i])
            }
          },
          error: () => {
            alert('Erro, se possível nos informe o ocorrido!')
            window.open('https://www.linkedin.com/in/matheus-bloize/')
          }
        })
    }
  }

  searchTv(query: string) {
    console.log(query)
    if(query === '') {
      Array.from(document.querySelectorAll('.search-content')).forEach(item => {
        item.parentElement.removeChild(item)
      })
      document.querySelector<HTMLElement>('.nothing').style.display = 'block'
    } else {
      this.ShowService.searchTv(query).subscribe(
        {
          next: (res) => {
            for (let i = 0; i < res.results.length; i++) {
              this.tvSearch = {
                results: res.results
              }
              this.listArr.push(res.results[i])
            }
          },
          error: () => {
            alert('Erro, se possível nos informe o ocorrido!')
            window.open('https://www.linkedin.com/in/matheus-bloize/')
          }
        })
    }
  }

  movieNotOnDb(title: string, poster: string) {
    if (
      poster === '/wd7b4Nv9QBHDTIjc2m7sr0IUMoh.jpg' ||
      poster === '/i0tScFVNCcgDzz9AgjYd3LDXGTO.jpg' ||
      poster === '/9z256FFPDsL7kSVJ9oyLELaN1ph.jpg' ||
      poster === '/mbYQLLluS651W89jO7MOZcLSCUw.jpg' ||
      poster === '/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg' ||
      poster === '/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg' ||
      poster === '/bQnnKBe3VsvXKMoNCaYmRzs1Dup.jpg' ||
      poster === '/8KGvYHQNOamON6ufQGjyhkiVn1V.jpg' ||
      poster === '/59SVNwLfoMnZPPB6ukW6dlPxAdI.jpg' ||
      poster === '/ooBR3qulC40ws0QkYBUAYFKmLRE.jpg' ||
      poster === '/xLxgVxFWvb9hhUyCDDXxRPPnFck.jpg' ||
      poster === '/bAFmcrCpXsJis5q0aaXvCz3dTiX.jpg' ||
      poster === '/f0CtZbae9cXj8bkWdCHzUHx5lsR.jpg' ||
      poster === '/oqkld2D0qcnSNRm15rYV2883JE3.jpg' ||
      poster === '/N9jyoeH3wKhiHYNYLE9Pnnls9D.jpg'  ||
      poster === '/ArWn6gCi61b3b3hclD2L0LOk66k.jpg' ||
      poster === '/4Lok3HBSfbQxibQZBygoVCwKKrZ.jpg' ||
      poster === '/nCbkOyOMTEwlEV0LtCOvCnwEONA.jpg' ||
      poster === '/1HdMUghqlgOIvbsU9ZtO40IPRzl.jpg' ||
      poster === '/fhQoQfejY1hUcwyuLgpBrYs6uFt.jpg' ||
      poster === '/uFXEoVPENgKJrkxFWlOhNMDwlEk.jpg' ||
      poster === '/7yQyDCqSazrYTnmxdQLAZ8YDH87.jpg' ||
      poster === '/nuF5yWtTJEEAd4Qa6cVkYz1XCST.jpg' ||
      poster === '/1uS9tYSYXU5jshLx2WlnOLZrMgD.jpg' ||
      poster === '/30erzlzIOtOK3k3T3BAl1GiVMP1.jpg'
    ) {
      alert(`${title} já está em nosso streaming, siga para a página inicial!`)
    } else {
      alert(`${title} não se encontra em nosso banco de dados!`)
    }
  }

  posterNotFound(poster: string) {
    if (poster === null) {
      for (let i = 0; i < document.querySelectorAll<HTMLDivElement>('.search-content').length; i++) {
        if(document.querySelectorAll('img')[i].src === 'https://image.tmdb.org/t/p/originalnull') {
          document.querySelectorAll('img')[i].src = 'https://rafaturis.com.br/wp-content/uploads/2014/01/default-placeholder.png'
        }
      }
    }
  }
}
