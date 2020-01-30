import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {
  peliculas: Array<any> = [];
  constructor(private _peliculas: PeliculasService) {}

  ngOnInit() {}

  buscarPeliculas(nombre) {
    this._peliculas.searchMovies(nombre).subscribe(resp => {
      this.peliculas = resp;
    });
  }
}
