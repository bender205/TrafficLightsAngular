import { Component, OnInit } from '@angular/core';
import { TrafficLight } from '../shared/models/TrafficLight';
import { Color } from '../shared/models/Color';


import { TrafficApiService } from '../api/services/traffic-api.service';
import { SignalRService } from '../api/services/signal-r.service';
import { ActivatedRoute } from '@angular/router';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDividerModule} from '@angular/material/divider';

@Component({
  selector: 'app-traffic-lights',
  templateUrl: './traffic-lights.component.html',
  styleUrls: ['./traffic-lights.component.css']
})
export class TrafficLightsComponent implements OnInit {

  trafficLight: TrafficLight;
  id: number;
  redOpacity = false;
  yellowOpacity = false;
  greenOpacity = false;

  constructor(
    private trafficLightService: TrafficApiService,
    private signalRService: SignalRService,
    private activatedRoute: ActivatedRoute
  )
  {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
    }, error => console.error(error)
    );

    this.trafficLightService.getById(this.id).subscribe(data => {
      this.trafficLight = data;
    }, error => console.error(error));

    this.signalRService.startConnection();

    this.signalRService.addReseiveCollorListener().subscribe(trafficLightResult => {
      if (trafficLightResult !== null && trafficLightResult.id === this.trafficLight.id) {
        this.trafficLight = trafficLightResult;
        this.switchColor(trafficLightResult);
      }
    });
  }

  setRed(): void {
    this.deactivateAllColors();
    this.redOpacity = !this.redOpacity;
  }

  setYellow(): void {
    this.deactivateAllColors();
    this.yellowOpacity = !this.yellowOpacity;
  }

  setGreen(): void {
    this.deactivateAllColors();
    this.greenOpacity = !this.greenOpacity;
  }

  switchColor(trafficLight: TrafficLight): void {
    if (this.trafficLight?.id === trafficLight?.id) {
      switch (trafficLight.color) {
        case Color.Red: this.setRed(); break;
        case Color.Yellow: this.setYellow(); break;
        case Color.Green: this.setGreen(); break;
      }
    }
  }

  deactivateAllColors(): void {
    this.redOpacity = false;
    this.yellowOpacity = false;
    this.greenOpacity = false;
  }
}

