import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-other-movie',
  templateUrl: './other-movie.component.html',
  styleUrls: ['./other-movie.component.css']
})
export class OtherMovieComponent implements OnInit {
  listBtnActive: boolean = false
  @Input()
  imageCover: string = ""

  @Input()
  id: string = ""
  constructor() { }

  ngOnInit(): void {
  }
}
