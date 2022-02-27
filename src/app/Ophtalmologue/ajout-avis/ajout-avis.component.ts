import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-ajout-avis',
  templateUrl: './ajout-avis.component.html',
  styleUrls: ['./ajout-avis.component.css']
})
export class AjoutAvisComponent implements OnInit {
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
  confimerOperation(){
    Swal.fire({
     
      icon: 'success',
      title: 'Votre avis a  bien ajouter',
      showConfirmButton: false,
      timer: 2000
    })
    this.route.navigate(['/accueil'])
  }
}