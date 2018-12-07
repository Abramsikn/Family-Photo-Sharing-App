 import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FileService } from '../shared/files/file.service';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { MatIconModule } from '@angular/material';
import { MarginIconComponent } from './margin-icon/margin-icon.component';
import { UploadDirective } from './directives/upload.directive';
import { AngularFireStorageModule } from '@angular/fire/storage';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule, 
    MatIconModule, 
    FlexLayoutModule,
    AngularFireStorageModule
  ], 
  declarations: [ 
    ToolbarComponent, MarginIconComponent, UploadDirective
  ],
  exports: [
    ToolbarComponent, MarginIconComponent, UploadDirective
  ],
  providers: [
    FileService
  ]
})
export class SharedModule { }
