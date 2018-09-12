import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../shared/auth.service';
import { User } from '../shared/models/user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  profileForm: FormGroup;
  user: User; 

  constructor(private authService: AuthService,
              private fb: FormBuilder) {
    this.profileForm  = fb.group( {
      username: ['',[Validators.required, Validators.minLength(5)]],
      firstName: '',
      middleName: '',
      lastName: ''
    });
  }

  ngOnInit() { 
    this.user = {username: 'Katlego',
                 email: 'Abramsikn@yahoo.com',
                 userid: '12345'}
    this.authService.getUser()
      .subscribe( user => console.log(user));
  }

  save() { }
  
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
