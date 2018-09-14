import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../user/shared/user.service';
import { User } from '../../user/shared/models/user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  profileForm: FormGroup;
  user: User; 

  constructor(private userService: UserService,
              private fb: FormBuilder) {
    this.profileForm  = fb.group( {
      username: ['',[Validators.required, Validators.minLength(5)]],
      firstName: '',
      middleName: '',
      lastName: ''
    });
  }

  ngOnInit() { 
    this.userService.getUser() /* get the authenticated user */
      .subscribe( user => this.user = user); /* paste the user on the local user */
  } 

  /* Updating user profile */
  save() { 
    const model = this.profileForm.value as User; /* Getting the user info from the form */
    model.uid = this.user.uid;  /* get the unique identifier from the actual user we have locally */
    this.userService.updateUser(model)
      .then( () => console.log('saved')) /* => error notation */
      .catch( err => console.log('error', err));
  }
  
  /* For Error */
  formError(fc: string, errCode: string, preRequired?: string[]): boolean {
    if(preRequired && preRequired.length > 0) {
      for (let i = 0; i < preRequired.length; ++i) {
        if (this.profileForm.get(fc).hasError(preRequired[i])) { /* if has error in position */
          return false;
        }
      }
    }
    return this.profileForm.get(fc).hasError(errCode);
  }
}
