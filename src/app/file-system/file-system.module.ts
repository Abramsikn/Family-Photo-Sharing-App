import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileService } from './file.service';
import { AngularFireStorageModule } from '@angular/fire/storage';

@NgModule({
  imports: [
    CommonModule,
    AngularFireStorageModule
  ],
  declarations: [],
  providers: [FileService]
})
export class FileSystemModule { }
