import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = 'c080ad8245d74ee11ecbdc86e28e2d96';

  constructor(private http: HttpClient) {}
  getWeatherDatas(cityName: string): Observable<any>{
    return this.http.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&mode=json&appid=${this.apiKey}`,
      {}
      )
  }
}
