import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './template/pages/home/home.component';
import { SignupComponent } from './template/pages/signup/signup.component';
import { SigninComponent } from './template/pages/signin/signin.component';

const routes: Routes = [{
        path: '', component: HomeComponent 
      },
      { 
        path: 'home', component: HomeComponent
      },
      { 
        path: 'signup', component: SignupComponent
      },
      { 
        path: 'signin', component: SigninComponent
      },
      { 
        path: '**', component: HomeComponent
      }, 
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }