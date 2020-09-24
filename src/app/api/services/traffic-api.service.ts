import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TrafficLight } from '../../shared/models/TrafficLight';
import { Observable } from 'rxjs';
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

  /*
    http.get('someurl',{
   headers: {'header1':'value1','header2':'value2'}
});
  */
}
