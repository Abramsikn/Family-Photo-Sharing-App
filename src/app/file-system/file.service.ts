import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { UploadTask } from './upload-task';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FileService {
  downloadURL: Observable<any>

  constructor(private angFstorage: AngularFireStorage)  { }

  upload(path: string, file: File): UploadTask {
    const task = this.angFstorage.upload(path, file);
    const ref = this.angFstorage.ref(path);
    const fileRef = this.angFstorage.ref(path);
    // get notified when the download URL is available
    task.snapshotChanges().pipe(
        finalize(() => this.downloadURL = fileRef.getDownloadURL() )
     )
    .subscribe()

    return{ 
      downloadUrl: this.downloadURL
    };
  }

    downloadUrlProfile (uid: string): Observable<any> {
      return this.angFstorage.ref('profile-images/' + uid).getDownloadURL();
    }
}
