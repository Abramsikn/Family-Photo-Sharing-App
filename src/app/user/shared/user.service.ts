import { Injectable } from '@angular/core';
import { User } from '../../user/shared/models/user';
import { AuthService } from '../../auth/shared/auth.service';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private authService: AuthService,
              private angularFs: AngularFirestore) { }
  
  /* Getting the staff from the Authenticated user */
  getUser(): Observable<User> {
    return this.authService.getAuthUser();
  }

  /* pass the user with all the information that we wanna store under the logged in user */
  /* user - specifies the uid */
  updateUser(user: User): Promise<any> {
    return this.angularFs.doc( 'users/' + user.uid).set(user);
  }
  /*
  looking for specific document
  [ 'users/' ] - I wanna find the specific document inside the user's path
  [ user.uid ] - Then we looking for the specific doc that contains the unique id of the user i am passing in 
  [ (set(user) ] - If in exists I wanna set a data on this guy
  [ :Promise<any> ] - When I am done I wanna return a Promise right here of any type
  */
}
