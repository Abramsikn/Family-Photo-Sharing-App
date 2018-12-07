import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../user/shared/user.service';
import { User } from '../../user/shared/models/user';
import { Subscription } from 'rxjs';
import { state, trigger, style, transition, animate } from '@angular/animations';
import { MatSnackBar } from '@angular/material';
import { FileService } from '../../shared/files/file.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
  animations: [trigger('imageHovering', [
    state('hoveringImage', style ({
      opacity: 0.3
    })),
    state('notHoveringImage', style ({
      opacity: 1
    })),
    transition('hoveringImage <=> notHoveringImage', animate('200ms ease-in'))
  ])]
})
export class UserProfileComponent implements OnInit, OnDestroy {
  profileForm: FormGroup;
  user: User;
  userSubscribe: Subscription;
  isHovering: boolean;
  img: string;
  srcLoaded: boolean;

  constructor(private userService: UserService,
              private fileService: FileService,
              private fb: FormBuilder,
              private snack: MatSnackBar) {
    this.profileForm  = fb.group( {
      username: ['',[Validators.required, Validators.minLength(5)]],
      firstName: '',
      middleName: '',
      lastName: '' 
    });
  }

  /* Save subscription after listening on userSubscription */
  ngOnInit() { 
    this.userSubscribe = this.userService.getUserWithProfileUrl() /* get the authenticated user */
      .subscribe( user => {
        this.user = user; /* paste the user on the local user */
        if (this.user.img) {
          this.img = user.profileImgUrl;
        } else {
          this.img = '/assets/NoProfile.svg';
        }
        this.profileForm.patchValue(user); /* After getting the user we wanna populate the information in the profile form */
      });
  }

  /* It's crutial to have unsubscribe in you app so that you cannot have huge data */
  /* When I am done listening i wanna stop listening until i go back to that component  */
  ngOnDestroy(){
    this.userSubscribe.unsubscribe();
  }

  hovering(isHovering: boolean) {
    this.isHovering = isHovering; 
  }
 
  //Accept drops
  //Allowing only jpeg & png pictures
  UploadNewImage(fileList) {
    if (fileList && fileList.length === 1 && 
       ['image/jpeg', 'image/png'].indexOf(fileList.item(0).type) > -1) { /*Allowing 2 types of files to be uploaded*/
      //this.srcLoaded = false; 
      const file = fileList.item(0);
      const path = 'profile-images/' + this.user.uid;
      this.fileService.upload(path, file).downloadUrl.subscribe(
        (url) => {
          this.img = url;
          this.user.img = true;
          this.save();
          this.hovering(false);
        }
      );
    } else {
      this.snack.open('You need to drop a single png or jpeg image', null, {
        duration: 4000
      });
      this.hovering(false);
    }
  }

  //Adding info on a user OR updating user profile
  save() { 
    const model = this.profileForm.value as User; /* Getting the user info from the form */
    model.uid = this.user.uid;  /* get the unique identifier from the actual user we have locally */
    model.img = this.user.img;
    this.userService.update(model)
      .then( () => {
        this.snack.open('User successfully saved', null, {
          duration: 2000,
          verticalPosition: 'top',
          panelClass: ['snack-color-succes']
        });
      }) /* => error notation */
      .catch( err => {
        this.snack.open('Something went while ttrying to save user details', null, {
          duration: 4000,
          verticalPosition: 'top',
          panelClass: ['snack-color-failure']
        });
      });
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
