import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  signinForm: FormGroup;
  
  constructor(private authService: AuthService,           /* Injecting Services */
              private fb: FormBuilder,
              private snackbar: MatSnackBar,
              private router:Router) { 
    this.signinForm = fb.group({                          /* A group is a way of desccribing the ibput fields */
      email: '',
      password: '' 
    });
  }

  ngOnInit() {
    this.authService.isAuthenticated()
      .subscribe(authState => console.log(authState),
                 error => console.log(error),
                 () => console.log('Complete'));
  }

  signin() {
    const signinModel = this.signinForm.value;
    this.authService.signin(signinModel.email, signinModel.password)
      .then( () => {
        this.router.navigateByUrl('albums')
        .then( () => this.snackbar.open('You have successfully logged in','', {
          duration: 1500
        }));
      })
      .catch( error => {
        this.snackbar.open(error.message, '', {
          duration: 5000
        });
      });
  }
}
