import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { MovieData } from '../models/movieData';
import { MovieSearchData } from '../models/movieSearchData';
import API_KEY from 'src/apikey'

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private baseURLMovie: string = ""
  private baseURLRest: string = ""
  private movieData: MovieData | any
  private baseURLSearchMovie: string = ""
  private movieSearchData: MovieSearchData | any

  constructor(private http: HttpClient) {
    this.baseURLMovie = environment.movieDbMovieUrl
    this.baseURLRest = `?api_key=${API_KEY}&language=pt-BR`
    this.baseURLSearchMovie = environment.movieDbSearchMovieUrl
  }

  getMovie(movie: string): Observable<MovieData> {
    this.movieData = this.http.get<MovieData>(`${this.baseURLMovie}${movie}${this.baseURLRest}`)
    return this.movieData
  }

  searchMovie(movie: string): Observable<MovieSearchData> {
    this.movieSearchData = this.http.get<MovieSearchData>(`${this.baseURLSearchMovie}${this.baseURLRest}&query=${movie}`)
    return this.movieSearchData
  }
}
