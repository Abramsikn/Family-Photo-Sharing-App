import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { NavbarComponent } from './template/navbar/navbar.component';
import { SignupComponent } from './template/pages/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignupComponent
  ],
  imports: [
    MDBBootstrapModule.forRoot(),
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '', 
        component: AppComponent 
      },
      { 
        path: 'signup', 
        component: SignupComponent
      },
      /*{ 
        path: '**', 
        component: NotFoundComponent
      }, */
    ])
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
