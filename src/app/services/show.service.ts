import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { ShowData } from '../models/showData';
import { TvSearchData } from '../models/showSearchData';
import API_KEY from 'src/apikey';

@Injectable({
  providedIn: 'root'
})
export class ShowService {
  private baseURLTv:string = ""
  private baseURLRest:string = ""
  private showData: ShowData | any
  private baseURLSearchTv: string = ""
  private showSearchData: TvSearchData | any

  constructor(private http: HttpClient) {
    this.baseURLTv = environment.movieDbTvUrl
    this.baseURLRest = `?api_key=${API_KEY}&language=pt-BR`
    this.baseURLSearchTv = environment.movieDbSearchTvUrl
  }

  getTv(show: string): Observable<ShowData>{
    this.showData = this.http.get<ShowData>(`${this.baseURLTv}${show}${this.baseURLRest}`)
    return this.showData
  }

  searchTv(tv: string): Observable<TvSearchData> {
    this.showSearchData = this.http.get<TvSearchData>(`${this.baseURLSearchTv}${this.baseURLRest}&query=${tv}`)
    return this.showSearchData
  }
}
