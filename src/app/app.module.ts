import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import {TrafficApiService} from './api/services/traffic-api.service';
import { TrafficLightsComponent } from './traffic-lights/traffic-lights.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';

import {SignalRService} from './api/services/signal-r.service';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavigationPanelComponent } from './navigation-panel/navigation-panel.component';
import { LayoutModule } from '@angular/cdk/layout';
import {MaterialModule} from './material/material.module';
import { RegistrationComponent } from './registration/registration.component';
import { AboutComponent } from './about/about.component';



const appRoutes: Routes = [
  { path: 'trafficlight/:id', component: TrafficLightsComponent},

  { path: 'login', component: LoginComponent},
  { path: 'registration', component: RegistrationComponent},
  { path: 'about', component: AboutComponent},
  
];
  // {
  //   path: '',
  //   component: AppComponent,
  //   children: [
  //     { path: 'trafficlight/:id', component: TrafficLightsComponent},
  //   ]
  // }
  // { path: '', component: TrafficLightsComponent},
  // { path: '**', component: TrafficLightsComponent }


@NgModule({
  declarations: [
    AppComponent,
    TrafficLightsComponent,
    LoginComponent,
    NavigationPanelComponent,
    RegistrationComponent,
    AboutComponent,
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatGridListModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    LayoutModule,
    MaterialModule
  ],
  providers: [TrafficApiService, SignalRService],
  bootstrap: [AppComponent]
})
export class AppModule { }
