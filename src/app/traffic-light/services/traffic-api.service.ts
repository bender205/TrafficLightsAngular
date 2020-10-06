import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { TrafficLight } from '../models/TrafficLight';
import { Observable } from 'rxjs';
import { TrafficLightByIdRequest } from '../models/TrafficLightByIdRequest';
@Injectable({
  providedIn: 'root'
})
export class TrafficApiService {

  constructor(private http: HttpClient)
  { }

  getById(id: number = 1): Observable<TrafficLight> {
    console.log('get by id()');
    return this.http.get<TrafficLight>(`/api/trafficlight/${id}`);
  }

  nextColor(trafficLightByIdRequest: TrafficLightByIdRequest): void {

  const params = new HttpParams({fromString: `id= ${trafficLightByIdRequest.id}`});

  this.http.put(`/api/trafficlight/nextcolor`, null, { params })
  .subscribe({
    error: error => console.error('Error in nextcolor: ', error)
   });
  }
}

