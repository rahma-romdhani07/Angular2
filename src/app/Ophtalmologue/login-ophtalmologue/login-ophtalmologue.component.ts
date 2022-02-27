import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-login-ophtalmologue',
  templateUrl: './login-ophtalmologue.component.html',
  styleUrls: ['./login-ophtalmologue.component.css']
})
export class LoginOphtalmologueComponent implements OnInit {
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
 
 
} constructor() { }

  ngOnInit() {
  }

}
