import { Subject, takeUntil } from 'rxjs';
import { weatherDatas } from './../../../../models/interfaces/weatherDatas';
import { WeatherService } from './../../services/weather.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: []
})
export class WeatherHomeComponent implements OnInit, OnDestroy{
  private readonly destroy$:Subject<void> = new Subject();
  initialCityName = 'Uberlândia';
  weatherDatas!: weatherDatas;
  serchIcon = faMagnifyingGlass;

  constructor(private WeatherService: WeatherService){}

  ngOnInit(): void {
    this.getWeatherDatas(this.initialCityName);
  }
  getWeatherDatas(cityName: string): void{
    this.WeatherService.getWeatherDatas(cityName)
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe({
        next: (Response)=>{
          Response &&(this.weatherDatas = Response);
          console.log(this.weatherDatas.main);
        },
        error:(error)=> console.log(error),

      });
  }
  onSubmit():void{
    this.getWeatherDatas(this.initialCityName);
    this.initialCityName = '';
  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
