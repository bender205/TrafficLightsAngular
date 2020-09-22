

import { Component, OnInit } from '@angular/core';
import { RegisterRequest } from  '../shared/models/RegisterRequest';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
submitted: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
