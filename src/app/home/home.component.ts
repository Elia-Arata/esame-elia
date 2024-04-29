import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { map } from 'rxjs/operators';
import { Weather } from '../models/weather.model';
import { WeatherService } from '../services/weather.service';
import { DetailComponent } from '../shared/detail/detail.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  displayedColumns: string[] = [
    'id',
    'day',
    'temperature',
    'pressure',
    'humidity',
    'dew_point',
  ];

  constructor(
    private weatherService: WeatherService,
    public dialog: MatDialog
  ) {}

  weather$ = this.weatherService.getWeather().pipe(
    map((weathers) => {
      return weathers.map((weather) => {
        return {
          ...weather,
          humidity: weather.humidity * 100,
        };
      });
    })
  );

  openDialog(data: Weather): void {
    this.dialog.open(DetailComponent, {
      data,
      hasBackdrop: true,
      backdropClass: 'backdrop',
    });
  }
}
