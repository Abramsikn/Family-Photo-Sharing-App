import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthService {

  constructor(private fireAuth: AngularFireAuth) {
  }

  signin(email: string, password: string) : Promise<any> {
    return this.fireAuth.auth.createUserAndRetrieveDataWithEmailAndPassword(email, password);
  }

}