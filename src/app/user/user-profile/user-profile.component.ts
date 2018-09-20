import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../user/shared/user.service';
import { User } from '../../user/shared/models/user';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit, OnDestroy {
  profileForm: FormGroup;
  user: User;
  userSubscribe: Subscription;

  constructor(private userService: UserService,
              private fb: FormBuilder) {
    this.profileForm  = fb.group( {
      username: ['',[Validators.required, Validators.minLength(5)]],
      firstName: '',
      middleName: '',
      lastName: ''
    });
  }

  /* Save subscription after listening on userSubscription */
  ngOnInit() { 
    this.userSubscribe = this.userService.getUser() /* get the authenticated user */
      .subscribe( user => {
        this.user = user; /* paste the user on the local user */
        this.profileForm.patchValue(user); /* After getting the user we wanna populate the information in the profile form */
        console.log(user);
      });
  }

  /* It's crutial to have unsubscribe in you app so that you cannot have huge data */
  /* When I am done listening i wanna stop listening until i go back to that component  */
  ngOnDestroy(){
    this.userSubscribe.unsubscribe();
  }

  hovering(event) {
    console.log('In profile component', event)
  }

  /* Updating user profile */
  save() { 
    const model = this.profileForm.value as User; /* Getting the user info from the form */
    model.uid = this.user.uid;  /* get the unique identifier from the actual user we have locally */
    this.userService.update(model)
      .then( () => console.log('saved')) /* => error notation */
      .catch( err => console.log('error', err));
  }
  
  unchanged(): boolean {  
    const model = this.profileForm.value as User;  
    return model.username === this.user.username &&
        model.firstName === this.user.firstName &&
        model.middleName === this.user.middleName &&
        model.lastName === this.user.lastName;
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