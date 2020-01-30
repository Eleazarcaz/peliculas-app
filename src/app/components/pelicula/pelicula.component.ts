import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styles: []
})
export class PeliculaComponent implements OnInit {
  pelicula: object = {};
  constructor(
    private route: ActivatedRoute,
    private _peliculas: PeliculasService
  ) {
    const ID = this.route.snapshot.paramMap.get('id');

    this._peliculas.getMovie(ID).subscribe(resp => {
      this.pelicula = resp;
      console.log(this.pelicula);
    });
  }

  ngOnInit() {}
}
