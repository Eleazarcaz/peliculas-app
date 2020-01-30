import { Component, OnInit, Input } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: []
})
export class CardComponent implements OnInit {
  @Input() pelicula: Object;

  constructor(public _peliculas: PeliculasService) {}

  ngOnInit() {
    if (this.pelicula['name']) {
      this.pelicula['title'] = this.pelicula['name'];
    }
  }
}
