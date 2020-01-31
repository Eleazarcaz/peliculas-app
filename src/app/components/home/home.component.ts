import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  public peliculas: Array<any>;
  loading: boolean;

  constructor(private _peliculas: PeliculasService) {
    this.loading = true;
  }

  ngOnInit() {
    this._peliculas.getTrendingMovies().subscribe((resp: any) => {
      this.peliculas = resp;
      this.loading = false;
    });
  }
}
