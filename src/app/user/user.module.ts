import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './shared/user.service';
import { MaterialModule } from '../shared/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule,
         MatInputModule,
         MatButtonModule,
         MatCardModule, 
         MatSnackBarModule, 
         MatDividerModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatFormFieldModule, 
    MatInputModule, 
    MatButtonModule,
    MatCardModule, 
    MatSnackBarModule, 
    MatDividerModule
  ],
  declarations: [
    UserProfileComponent
  ],
  providers: [ 
    UserService 
  ]
})
export class UserModule { }
