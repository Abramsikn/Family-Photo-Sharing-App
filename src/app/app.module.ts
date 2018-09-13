import { AuthService } from './auth/shared/auth.service';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MaterialModule } from '././shared/material/material.module';
import { AppRoutingModule } from '././shared/routing/app-routing.module';
import { AlbumsModule } from './albums/albums.module';
import { SharedModule } from './shared/shared.module';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './template/pages/error/notfound';
import { HomeComponent } from './template/pages/home/home.component';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
  ],
  imports: [
    MDBBootstrapModule.forRoot(),
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    AlbumsModule, 
    SharedModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(environment.firebase),
    AuthModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [ AuthService ],
  bootstrap: [AppComponent],
})
export class AppModule { }
