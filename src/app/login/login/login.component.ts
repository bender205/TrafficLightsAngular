
import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl, Validators, FormGroup } from '@angular/forms';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { TokenModel } from '../../shared/models/TokenModel';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{ 
title = 'Login';

loginData: FormGroup;

// nameControl: FormControl;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // this.nameControl = new FormControl('enter your name here', [Validators.required, Validators.minLength(2)]);
    // this.nameControl.valueChanges.subscribe((value) => {
    //   console.log(value);
    // });
    // this.nameControl.statusChanges.subscribe((status) => {
    //   console.log(status);
    // });


    this.loginData = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });


    this.loginData.valueChanges.subscribe((value) => {
      console.log(value);
    });

    this.loginData.statusChanges.subscribe((status) => {
      console.log(status);
    });
  }


}

