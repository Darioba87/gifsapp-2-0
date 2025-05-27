import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@enviroments/environment';
import type { GiphyResponse } from '../interfaces/giphy.interfaces';

@Injectable({ providedIn: 'root' })
export class GifService {

  private http = inject(HttpClient)

  constructor() {
    this.loadTrendeingGifs();
  }

  loadTrendeingGifs() {
    this.http.get<GiphyResponse>(`${environment.giphyUrl}/gifs/trending`, {
      params: {
        api_key: environment.apiKeyGiphy,
        limit: '20',
      }
    });
  }
}
