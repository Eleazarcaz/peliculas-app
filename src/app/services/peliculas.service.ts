import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  private api_key: string = '11ddc86886532d7864a6b207f3084193';
  private url: string = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) {}

  getTrendingMovies() {
    return this.http
      .get(`${this.url}/trending/all/week?api_key=${this.api_key}&language=es`)
      .pipe(
        map(resp => {
          return resp['results'];
        })
      );
  }
}
