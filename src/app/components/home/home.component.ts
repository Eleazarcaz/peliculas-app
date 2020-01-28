import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  constructor(private _peliculas: PeliculasService) {
    this._peliculas.getTrendingMovies().subscribe(peliculas => {
      console.log(peliculas);
    });
  }

  ngOnInit() {}
}
