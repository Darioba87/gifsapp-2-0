import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '@enviroments/environment';
import type { GiphyResponse } from '../interfaces/giphy.interfaces';
import { Gif } from '../interfaces/gif.interface';
import { GifMapper } from '../mapper/gif.mapper';

@Injectable({ providedIn: 'root' })
export class GifService {

  private http = inject(HttpClient);

  trendingGifs = signal<Gif[]>([])
  trendingGifLoading = signal<boolean>(true)

  constructor() {
    this.loadTrendeingGifs();
  }

  loadTrendeingGifs() {
    this.http.get<GiphyResponse>(`${environment.giphyUrl}/gifs/trending`, {
      params: {
        api_key: environment.apiKeyGiphy,
        limit: '20',
      }
    }).subscribe((resp) => {
      const gifs = GifMapper.mapGiphyItmesToGifArray(resp.data);
      this.trendingGifs.set(gifs);
      this.trendingGifLoading.set(false);
      console.log(gifs);

    })
  }
}
