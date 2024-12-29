export interface weatherDatas{
  Coord:{
    lon: number;
    lat: number;
  };
  weather:[
    id:number,
    main: string,
    descritption: string,
    icon: string
  ];

  base: string;
  main:{
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind:{
    speed: number;
    deg: number;

  };
  dt: number;
  sys:{
    type: number;
    id: number;
    coutry: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}
