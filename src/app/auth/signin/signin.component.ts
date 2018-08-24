import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  signinForm: FormGroup;

  /* Injecting Service */
  constructor(private authService: AuthService,
              private fb: FormBuilder) { 
    this.signinForm = fb.group( /*controlsConfig:*/ {
      email: '',
      password: '' 
    });
  }

  ngOnInit() {
    /* Promise will execute the login as soon as  function at the service is called */
    this.authService.signin( 'testing2@yahoo.com', '123456' )
      .then( () => console.log( 'Signed In'))
      .catch( error => console.log(error));

      this.authService.isAuthenticated()
        .subscribe(authState => console.log(authState),
                    error2 => console.log(error2),
                      () => console.log('Complete'));
  }

  signin() {
    const signinModel = this.signinForm.value; /* */
    this.authService.signin(signinModel.email, signinModel.password)
      .then( () => console.log('Signed In'))
      .catch( error => console.log(error));
  }
}
