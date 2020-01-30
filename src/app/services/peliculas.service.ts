import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  private api_key: string = '11ddc86886532d7864a6b207f3084193';
  private url: string = 'https://api.themoviedb.org/3';
  public genres: Array<object>;

  constructor(private http: HttpClient) {
    this.getGenres().subscribe(resp => (this.genres = resp));
  }

  getTrendingMovies() {
    return this.http
      .get(`${this.url}/trending/all/week?api_key=${this.api_key}&language=es`)
      .pipe(
        map(resp => {
          let peliculas = resp['results'];

          peliculas.forEach(pelicula => {
            pelicula['generos'] = [];
            // Ciclo para checar cada id en los generos de la pelicula
            pelicula['genre_ids'].forEach((genero_id: any) => {
              let findGenero = this.genres.find(findId);

              if (findGenero !== undefined) {
                (<Array<any>>pelicula['generos']).push(findGenero);
              }
              function findId(obj) {
                return obj.id === genero_id;
              }
            });
          });
          return peliculas;
        })
      );
  }

  searchMovies(name: string) {
    return this.http
      .get(
        `${this.url}/search/movie?api_key=${this.api_key}&language=es-MX&query=${name}&page=1&include_adult=false`
      )
      .pipe(
        map(resp => {
          var peliculas_buscadas = [];
          var resultados = resp['results'];
          var numero_resultados = 10;
          if (resp['total_results'] < 10) {
            numero_resultados = resp['total_results'];
          }

          for (let index = 0; index <= numero_resultados; index++) {
            peliculas_buscadas.push(resultados[index]);
          }

          return peliculas_buscadas;
        })
      );
  }
  getGenres() {
    return this.http
      .get(
        `${this.url}/genre/movie/list?api_key=${this.api_key}&language=es-MX`
      )
      .pipe(map(resp => resp['genres']));
  }
}
