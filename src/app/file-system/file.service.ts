import { Injectable } from '@angular/core';
import { AngularFireStorage } from 'angularfire2/storage';
import { UploadTask } from './upload-task';

@Injectable()
export class FileService {

  constructor(private angFStorage: AngularFireStorage)  { }

  upload(path: string, file: File): UploadTask {
    const task = this.angFStorage.upload(path, file);
    
    return{
      
    }
  }

  /*downloadUrlProfile(uid: string):  {
    return this.angFStorage.ref('profile-images', + uid)
  }*/
}
