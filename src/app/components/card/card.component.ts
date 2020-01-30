import { Component, OnInit, Input } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: []
})
export class CardComponent implements OnInit {
  @Input() pelicula: Object;

  constructor(public _peliculas: PeliculasService, private router: Router) {}

  ngOnInit() {
    if (this.pelicula['name']) {
      this.pelicula['title'] = this.pelicula['name'];
    }
    console.log(this.pelicula);
  }

  verPelicula(id: string) {
    this.router.navigateByUrl(`/pelicula/${this.pelicula['id']}`);
  }
}
