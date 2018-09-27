import { Injectable } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';
import { UploadTask } from './upload-task';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FileService {

  constructor(private angFStorage: AngularFireStorage)  { }

  upload(path: string, file: File): UploadTask {
    const task = this.angFStorage.upload(path, file);
    return {
      //downloadUrl: task.downloadURL()
     };
  }

  /*downloadUrlProfile(uid: string):  {
    return this.angFStorage.ref('profile-images', + uid)
  }*/
}
