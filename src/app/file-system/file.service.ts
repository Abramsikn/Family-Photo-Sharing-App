import { Injectable } from '@angular/core';
import { AngularFirestore} from 'angularfire2/firestore';
import { AngularFireStorage } from 'angularfire2/storage';
import { UploadTask } from './upload-task';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FileService {

  downloadURL: Observable<string>

  constructor(private angFs: AngularFireStorage)  { }


  upload(path: string, file: File): UploadTask {
    const task = this.angFs.upload(path, file);
    return {
      //downloadUrl: task.downloadURL()
    };
  }

  //downloadUrlProfile(uid: string): Observable<any> {
    //return this.angFs.ref(path: 'profile-images/' + uid.);
  //}
}
