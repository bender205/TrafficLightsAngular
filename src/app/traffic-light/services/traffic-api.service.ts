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
    return this.http.get<TrafficLight>(`/api/TrafficLight/${id}`);
  }

//   return this._HttpClient.get(`${API_URL}/api/v1/data/logs`, {
//     
// })


nextColor(trafficLightByIdRequest: TrafficLightByIdRequest): void {

  const params = new HttpParams({fromString: `id= ${trafficLightByIdRequest.id}`});
  // let params = new HttpParams();
  // params.set('id', trafficLightByIdRequest.id.toString());
 // new HttpParams().set('id', trafficLightByIdRequest.id.toString())
 // this.http.put(`/api/trafficlight/nextcolor`, new HttpParams({fromString: `id= ${trafficLightByIdRequest.id}`}))
 this.http.put(`/api/trafficlight/nextcolor`,null,{ params })
  .subscribe({
   error: error => console.error('Error in nextcolor: ', error)
  });
}

  // nextColor(trafficLightByIdRequest: TrafficLightByIdRequest): void {


  //   //let params = new HttpParams();
  //  // params.set('id', trafficLightByIdRequest.id.toString());
  //  // new HttpParams().set('id', trafficLightByIdRequest.id.toString())
  //   this.http.put(`/api/trafficlight/nextcolor`,
  //    { params: new HttpParams().set('id', trafficLightByIdRequest.id.toString())})
  //   .subscribe({
  //    error: error => console.error('Error in nextcolor: ', error)
  //   });
  // }

  // nextColor(trafficLightByIdRequest: TrafficLightByIdRequest): void {
  //   this.http.put(`/api/trafficlight/nextcolor`,
  //   {
  //     id: trafficLightByIdRequest.id
  //   }).subscribe({
  //    error: error => console.error('Error in nextcolor: ', error)
  //   });
  // }
 
}

