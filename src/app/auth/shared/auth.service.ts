import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  constructor(private fireAuth: AngularFireAuth) {
  }

  signin(email: string, password: string) : Promise<any> {
    return this.fireAuth.auth.signInAndRetrieveDataWithEmailAndPassword(email, password); 
  }

  signout(): Promise<any> {
    return this.fireAuth.auth.signOut();
  }

  /* Function to keep track weather the user is logged in or logged out. 
  It continuosly listen if the user in logged in/out */
  isAuthenticated(): Observable<boolean> {
    return this.fireAuth.authState
      .map(authState => {
        return authState !== null;
      });
  }
}