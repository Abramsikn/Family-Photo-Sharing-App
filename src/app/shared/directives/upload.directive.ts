import { Directive, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appUpload]'
})
export class UploadDirective { 

  @Output()
  hovering = new EventEmitter<boolean>(); /* EventEmmiter will return boolean */
  /* nform whoever wants to know outside he directive that now you need to do something   */
 
  @Output()
  dropped = new EventEmitter<FileList>();

  constructor() { }
  
  @HostListener('dragenter', ['$event'])
  onDragEnter(event) {
    event.preventDefault();
    this.hovering.emit(true);
  }
  
  @HostListener('dragleave', ['$event'])
  onDragLeave(event) {
    event.preventDefault();
    this.hovering.emit(false);
  }
  //Prevent all default actions when we drop the pic
  @HostListener('dragover', ['$event'])
  onDragOver(event) {
    event.preventDefault();
  }

  @HostListener('drop', ['$event'])
  onDrop(event) {
    event.preventDefault();
    this.dropped.emit(event.dataTransfer.files); 
  }
}
