import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = 'YOUR_API_KEY';
  private baseUrl = 'YOUR_RESOURCE_URL';

  constructor(private http: HttpClient) {}

  getCurrentWeather(location: string): Observable<any> {
    const url = `${this.baseUrl}/weather?q=${location}&appid=${this.apiKey}`;
    return this.http.get(url).pipe(
      catchError(this.handleError)
    );
  }

  getWeatherForecast(location: string): Observable<any> {
    const url = `${this.baseUrl}/forecast?q=${location}&appid=${this.apiKey}`;
    return this.http.get(url).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    return throwError('An error occurred while fetching weather data.');
  }
}
