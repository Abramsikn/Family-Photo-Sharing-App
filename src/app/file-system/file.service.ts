import { Injectable } from '@angular/core';
import { AngularFireStorage } from 'angularfire2/storage';
import { UploadTask } from './upload-task';

@Injectable()
export class FileService {

  constructor(private angularFsStorage: AngularFireStorage)  { }

  upload(path: string, file: File): UploadTask {
    const task = this.angularFsStorage.upload(path, file);
    return {
      
    };
  }
}
