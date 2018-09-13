import { AuthGuard } from './shared/auth-guard.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from './shared/auth.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../shared/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

import { SigninComponent } from '../auth/signin/signin.component';
import { MatFormFieldModule, MatInputModule, MatButtonModule, MatCardModule, MatSnackBarModule, MatDividerModule } from '@angular/material';
import { SignupComponent } from './signup/signup.component';
import { CheckLoggedInGuard } from './shared/check-logged-in.guard';
import { RouterModule } from '@angular/router';
import { UserModule } from '../user/user.module';

@NgModule({
  imports: [
    CommonModule, 
    AngularFireAuthModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatFormFieldModule, 
    MatInputModule, 
    MatButtonModule,
    MatCardModule, 
    MatSnackBarModule, 
    MatDividerModule,
    RouterModule
  ],
  declarations: [ SigninComponent, SignupComponent ],
  providers: [ AuthService, AuthGuard, CheckLoggedInGuard ]
})
export class AuthModule { }
