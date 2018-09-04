import { AuthGuard } from './shared/auth-guard.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from './shared/auth.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../shared/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

import { SigninComponent } from '../auth/signin/signin.component';
import { MatFormFieldModule, MatInputModule, MatButtonModule, MatCardModule, MatSnackBarModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule, 
    AngularFireAuthModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatFormFieldModule, MatInputModule, MatButtonModule, MatCardModule, MatSnackBarModule
  ],
  declarations: [ SigninComponent ],
  providers: [ AuthService, AuthGuard ]
})
export class AuthModule { }
