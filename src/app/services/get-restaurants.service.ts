import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Restaurants } from 'app/interface/restaurant/restaurants';
import { Observable } from 'rxjs';
import { stringify } from 'querystring';



@Injectable()
export class GetRestaurantsService {
  link: string;
  tempResponse: any = new Array;
  restaurants: any = new Array;


  constructor(private http: HttpClient) { }

  makeRequest(lk): Observable <Restaurants[]>{
    return this.http.get<Restaurants[]>(lk);
  }

  getLocation():Promise<any>{
    return new Promise((resolve, reject)=>{
      navigator.geolocation.getCurrentPosition(resp=>{
        resolve({lng: resp.coords.longitude, lat: resp.coords.latitude})
      })
    })
  }


  getPostalcode(lk): Observable <Location[]>{
    return this.http.get<Location[]>(lk);
  }



}
