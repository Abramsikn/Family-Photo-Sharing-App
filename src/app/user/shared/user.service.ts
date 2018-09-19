import { Injectable } from '@angular/core';
import { User } from '../../user/shared/models/user';
import { AuthService } from '../../auth/shared/auth.service';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore } from 'angularfire2/firestore';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/first';

@Injectable()
export class UserService {

  constructor(private authService: AuthService,
              private angularFs: AngularFirestore) { }
  
  /* Getting the staff from the Authenticated user */
  getUser(): Observable<User> {
    // 1. Get the AuthUser
    // Get the DbUser - 'SwitchMap' combine the two methods and wait for each other before retirning anything
    // Merge the above 2 together and return it as one object - 'Map' to merge the
    // Read the code !!!
    
    /* first() - Get the information ones the shut down the connection */
    return this.authService.getAuthUser().first() //Listening for an authUser (asyncronously - wait for the response)
      .switchMap(authUser => {  // When i'm coming back I wanna executu another asyncronously call which is an authUser
        return this.angularFs.doc<User>('users/' + authUser.uid).valueChanges().first() //Now that authUser i'm going to use him to call another asyncronous call
          .map(dbUser => {  //When async call is done, map data
            dbUser.uid = authUser.uid /* Map them together */
            dbUser.email = authUser.email
            return dbUser;  //When everything is done I return the observable of the type user
          })
      });
  }

  /* pass the user with all the information that we wanna store under the logged in user */
  /* user - specifies the uid */
  update(user: User): Promise<any> {
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
