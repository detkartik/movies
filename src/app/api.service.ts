import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'http://127.0.0.1:8000/api/movie/movie/';
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'Token 13a79764f97aa1f69cca308fd4936584f3fd46d4'
  });
  constructor(private httpClient: HttpClient) {}
  getMovies() {
    return this.httpClient.get(this.baseUrl, {
      headers: this.headers
    });
  }
  getMovie(id: number) {
    return this.httpClient.get('${this.baseUrl}${id}/', {
      headers: this.headers
    });
  }
  rateMovies(rate: number, movieId: number) {
    const body = {};
    return this.httpClient.post(this.baseUrl, body, { headers: this.headers });
  }
}
