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

  /* Injecting Service */
  constructor(private authService: AuthService,
              private fb: FormBuilder,
              private snackbar: MatSnackBar,
              private router:Router) { 
    this.signinForm = fb.group({ /* A group is a way of desccribing the ibput fields */
      email: '',
      password: '' 
    });
  }

  ngOnInit() {
    /* Promise will execute the login as soon as  function at the service is called */

    /* this.authService.signin( 'testing2@yahoo.com', '123456' )
      .then( () => console.log( 'Signed In'))
      .catch( error => console.log(error)); */

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
        .then( () => this.snackbar.open('You have successfully logged in', '', {
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
