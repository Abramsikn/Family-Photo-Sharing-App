import { Injectable } from '@angular/core';
import { User } from '../../user/shared/models/user';
import { AuthService } from '../../auth/shared/auth.service';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private authService: AuthService) { }
  
  /* Getting the staff from the Authenticated user */
  getUser(): Observable<User> {
    return this.authService.getAuthUser();
  }

  /* pass the user with all the information that we wanna store under the logged in user */
  /* user - specifies the uid */
  updateUser(user: User) {
    
  }
}
