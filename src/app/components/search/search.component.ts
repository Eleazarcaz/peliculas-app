import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {
  peliculas: Array<any> = [];
  constructor(
    private _peliculas: PeliculasService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params.pelicula) {
        this.buscarPeliculas(params.pelicula);
      }
    });
  }

  buscarPeliculas(nombre) {
    this._peliculas.searchMovies(nombre).subscribe(resp => {
      this.peliculas = resp;
    });
  }
}
