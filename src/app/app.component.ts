import { AuthService } from './auth/shared/auth.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ObservableMedia, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy { 
  navBarOpen = true;
  mode = 'side';

  watcher: Subscription;
  constructor(media: ObservableMedia,
              private authService: AuthService) {
    this.watcher = media.subscribe((change: MediaChange) => {
      if (change.mqAlias === 'xs') {
        this.loadMobileContent();
      } else {
        this.loadDashBoardContent();
      }
    });
  } 
  
  ngOnInit() {
     this.authService.isAuthenticated().subscribe(isSignedIn => {
       this.navBarOpen = isSignedIn;
     })
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
