import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  
  /* Injecting Service */
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.signin( 'testing1@yahoo.com', '123456' )
      .then( user => console.log(user))
      .catch( error => console.log(error));
  }

  /* Gonna do this functions in a service and wanna use them lateron */
  SignIn () { 
  }
  
  SignOut() {
  }

}
