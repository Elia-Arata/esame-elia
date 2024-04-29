import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Weather } from '../models/weather.model';

@Injectable({ providedIn: 'root' })
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeather(): Observable<Weather[]> {
    return this.http.get<Weather[]>(
      'http://localhost:5000/api/weather/history'
    );
  }
}
