import { Injectable } from '@angular/core';
import * as signalR from '@aspnet/signalr';
import { TrafficLight } from '../models/TrafficLight';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SignalRService {

  private hubConnection: signalR.HubConnection;
  private trafficLightSource = new BehaviorSubject<TrafficLight>(null);

  constructor(private http: HttpClient)
  { }

  public startConnection = () => {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('https://localhost:44362/lighthub')
      .build();
    this.hubConnection
      .start()
      .then(() => console.log('connection started'))
      .catch(err => console.log('Error while starting connection: ' + err));
  }

  public addReseiveCollorListener(): Observable<TrafficLight>{
    this.hubConnection.on('receivecolor',  (light: TrafficLight) => {
      this.trafficLightSource.next(light);
    });
    return this.trafficLightSource.asObservable();
  }

}
