import { Component, OnDestroy } from '@angular/core';
import { ObservableMedia, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy { 
  navBarOpen = true;
  mode = 'side';

  watcher: Subscription;
  constructor(media: ObservableMedia) {
    this.watcher = media.subscribe((change: MediaChange) => {
      if (change.mqAlias === 'xs') {
        this.loadMobileContent();
      } else {
        this.loadDashBoardContent();
      }
    });
  } 

  ngOnDestroy() {
    this.watcher.unsubscribe();
  }

  toggleNav() {
    this.navBarOpen = !this.navBarOpen; 
  }

  loadMobileContent() {
    this.navBarOpen = false;
    this.mode = 'over';
  }

  loadDashBoardContent () {
    this.navBarOpen = true;
    this.mode = 'side'; 
  }
}
