import { Component } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  location = '';
  currentWeather: any;
  forecast: any;

  constructor(private weatherService: WeatherService) {}

  fetchWeatherData() {
    this.weatherService.getCurrentWeather(this.location)
      .subscribe(data => {
        this.currentWeather = data;
      });
    this.weatherService.getWeatherForecast(this.location)
      .subscribe(data => {
        this.forecast = data;
      });
  }
}
