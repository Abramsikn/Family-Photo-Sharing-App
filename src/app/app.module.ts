import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule }   from '@angular/forms';
import { MaterialModule } from '././shared/material/material.module';
import { AppRoutingModule } from '././shared/routing/app-routing.module';
import { AlbumsModule } from './albums/albums.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './shared/home/home.component';
import { SignupComponent } from './template/pages/signup/signup.component';
import { SigninComponent } from './template/pages/signin/signin.component';
import { NotFoundComponent } from './template/pages/error/notfound';
import { ProfileComponent } from './template/pages/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,   
    HomeComponent,
    SignupComponent,
    SigninComponent,
    NotFoundComponent,
    ProfileComponent
  ],
  imports: [
    MDBBootstrapModule.forRoot(),
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    AlbumsModule, 
    SharedModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
