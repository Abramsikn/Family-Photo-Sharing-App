import { AuthService } from './../../auth/shared/auth.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  isSignedIn: boolean; /* Property of type boolean for checking if user is signed in */
  @Output()
  navToggle = new EventEmitter();
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.isAuthenticated()
      .subscribe( isSinged => {
        this.isSignedIn = isSinged;
      })
  }

  //Method from the html - () -
  toggleNav() {
    this.navToggle.emit();
  }

  signout() {
     this.authService.signout();
  }
}
