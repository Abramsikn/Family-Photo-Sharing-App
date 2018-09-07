import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { passwordMatch } from '../shared/password.validator';
import { User } from '../shared/models/user';

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
      email: ['', [Validators.required, Validators.email]],      /* Angular Front-End Validations */
      password: ['', [Validators.required, Validators.minLength(8)]],
      repeatPassword: ['', [Validators.required, passwordMatch()]]
    });
  }

  signup() {
    const signUpModel = this.signupForm.value as User; /* as keyword to convert js object in to a user */
    this.authService.signup(signUpModel)
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
  /* For Error? */
  formError(fc: string, errCode: string, preRequired?: string[]): boolean {
    if(preRequired && preRequired.length > 0) {
      for (let i = 0; i < preRequired.length; ++i) {
        if (this.signupForm.get(fc).hasError(preRequired[i])) { /* if has error in position */
          return false;
        }
      }
    }
    return this.signupForm.get(fc).hasError(errCode);
  }
}
