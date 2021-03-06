import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
  
  @Component({
  selector: 'app-repondre-avis1',
  templateUrl: './repondre-avis1.component.html',
  styleUrls: ['./repondre-avis1.component.css'],
})
export class RepondreAvis1Component implements OnInit {
  hide = true;
  formGroup1: FormGroup;
  formGroup2: FormGroup;
   isLinear = false;

  constructor(private _formBuilder: FormBuilder , private route : Router) {}

  ngOnInit() {
    this.formGroup1 = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.formGroup2 = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
  }
}