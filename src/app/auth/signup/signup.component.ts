import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  constructor(private authService: AuthService,               /* Injecting Services */
              private fb: FormBuilder,
              private snackbar: MatSnackBar,
              private router:Router) { }

  ngOnInit() {
    this.signupForm = this.fb.group({
      email: ['', Validators.required, Validators.email],      /* Angular Front-End Validations */
      password: ['', Validators.required],
      repeatPassword: ['', Validators.required]
    });
  }

  signup() {
    const signUpModel = this.signupForm.value;
    this.authService.signup(signUpModel.email, signUpModel.password)
      .then( user => {
        this.router.navigateByUrl( 'albums')
          .then( () => {
            this.snackbar.open('You have registered successfully','', {
              duration: 2500
            });
          });
      })
      .catch( error => {
        this.snackbar.open(error,'', {
          duration: 5000
        });
      });
  }
}
