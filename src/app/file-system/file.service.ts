import { Injectable } from '@angular/core';
import { AngularFireStorage } from 'angularfire2/storage';
import { UploadTask } from './upload-task';

@Injectable()
export class FileService {

  constructor(private angFstorage: AngularFireStorage)  { }

  upload(path: string, file: File): UploadTask {
    const task = this.angFstorage.upload(path, file);
    const ref = this.angFstorage.ref(path);
    const downloadUrlProfile = ref.getDownloadURL().subscribe(url => {
      const downloadURL = url;
      console.log(url);
    })
    
    return{
      
    }
  }

  /*downloadUrlProfile(uid: string):  {
    return this.angFStorage.ref('profile-images', + uid)
  }*/
}
