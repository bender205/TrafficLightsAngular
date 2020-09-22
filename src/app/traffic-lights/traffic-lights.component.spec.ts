import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrafficLightsComponent } from './traffic-lights.component';

describe('TrafficLightsComponent', () => {
  let component: TrafficLightsComponent;
  let fixture: ComponentFixture<TrafficLightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrafficLightsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrafficLightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
