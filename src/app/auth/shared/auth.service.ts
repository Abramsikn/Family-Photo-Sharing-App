import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { User } from './models/user';

@Injectable()
export class AuthService {

  constructor(private fireAuth: AngularFireAuth) {
  }

  /* Sign Up */
  signup(user: User) : Promise<any> {
    return this.fireAuth.auth
      .createUserAndRetrieveDataWithEmailAndPassword(
        user.email,
        user.password
      ); 
  }
  
  /* Sign In */
  signin(email: string, password: string) : Promise<any> {
    return this.fireAuth.auth
      .signInAndRetrieveDataWithEmailAndPassword(email, password); 
  }

  /* Sign Out */
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
  /* Getting the staff from the Authenticated user */
  getAuthUser(): Observable<User> {
    return this.fireAuth.authState
      .map(authState => {
        return {email: authState.email, uid: authState.uid };
      });
  }
}