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
         MatDividerModule, 
         MatTooltipModule} from '@angular/material';
import { RouterModule } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { SharedModule } from '../shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FileSystemModule } from '../file-system/file-system.module';

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
    MatDividerModule,
    AngularFirestoreModule,
    SharedModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    FileSystemModule
  ],
  declarations: [
    UserProfileComponent
  ],
  providers: [ 
    UserService 
  ]
})
export class UserModule { }
