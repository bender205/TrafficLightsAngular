import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { TrafficApiService } from './traffic-light/services/traffic-api.service';
import { TrafficLightsComponent } from './traffic-light/traffic-lights/traffic-lights.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';

import { SignalRService } from './traffic-light/services/signal-r.service';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavigationPanelComponent } from './shared/navigation-panel/navigation-panel.component';

import { LayoutModule } from '@angular/cdk/layout';
import { MaterialModule } from './shared/material/material.module';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './account/login/login.component';

import { RegisterComponent } from './account/register/register.component';
import { AccountModule } from './account/account.module';
import { InterseptorJwt } from './core/interseptor-jwt/interseptor-jwt';
import { ErrorInterceptor } from '../app/core/helpers/error.interceptor';



const appRoutes: Routes = [
  { path: 'trafficlight/:id', component: TrafficLightsComponent },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'about', component: AboutComponent },

];


@NgModule({
  declarations: [
    AppComponent,
    TrafficLightsComponent,
    NavigationPanelComponent,
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
    MaterialModule,
    AccountModule
  ],
  providers: [
    TrafficApiService,
    SignalRService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterseptorJwt,
      multi: true
    },
    ErrorInterceptor
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
