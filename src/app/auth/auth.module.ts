import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from './shared/auth.service';

import { SigninComponent } from '../auth/signin/signin.component';
import { MaterialModule } from '../shared/material/material.module';

@NgModule({
  imports: [
    CommonModule,
    AngularFireAuthModule,
    MaterialModule
  ],
  declarations: [ SigninComponent ],
  providers: [ AuthService ]
})
export class AuthModule { }
