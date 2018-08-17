import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule }   from '@angular/forms';
import { MaterialModule } from '././helper/material/material.module';
import { AppRoutingModule } from '././helper/routing/app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './template/navbar/navbar.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './template/footer/footer.component';
import { HomeComponent } from './template/pages/home/home.component';
import { SignupComponent } from './template/pages/signup/signup.component';
import { SigninComponent } from './template/pages/signin/signin.component';
import { NotFoundComponent } from './template/pages/error/notfound';
import { ProfileComponent } from './template/pages/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
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
    BrowserAnimationsModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
