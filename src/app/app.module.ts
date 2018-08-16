import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RouterModule } from '@angular/router'

import { MatCheckboxModule, MatInputModule, MatButtonModule, MatDividerModule,
         MatCardModule, MatToolbarModule, MatProgressSpinnerModule, MatProgressBarModule, 
         MatSnackBarModule, MatMenuModule, MatGridListModule} from '@angular/material';

import { AppComponent } from './app.component';
import { NavbarComponent } from './template/navbar/navbar.component';
import { FooterComponent } from './template/footer/footer.component';
import { HomeComponent } from './template/pages/home/home.component';
import { SignupComponent } from './template/pages/signup/signup.component';
import { SigninComponent } from './template/pages/signin/signin.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    MDBBootstrapModule.forRoot(),
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '', 
        component: HomeComponent 
      },
      { 
        path: 'home', 
        component: HomeComponent
      },
      { 
        path: 'signup', 
        component: SignupComponent
      },
      { 
        path: 'signin', 
        component: SigninComponent
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
