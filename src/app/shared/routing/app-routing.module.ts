import { CheckLoggedInGuard } from './../../auth/shared/check-logged-in.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules  } from '@angular/router';

import { HomeComponent } from '../../template/pages/home/home.component';
import { SignupComponent } from '../../auth/signup/signup.component';
import { SigninComponent } from '../../auth/signin/signin.component';
import { AlbumsListComponent } from '../../albums/albums-list/albums-list.component';
import { NotFoundComponent } from '../../template/pages/error/notfound';
import { AuthModule } from '../../auth/auth.module';
import { AuthGuard } from '../../auth/shared/auth-guard.service';

const routes: Routes = [
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent},
      { path: 'signup', component: SignupComponent, canActivate: [CheckLoggedInGuard] },
      { path: 'signin', component: SigninComponent, canActivate: [CheckLoggedInGuard] },
      { path: 'albums', component: AlbumsListComponent, canActivate: [AuthGuard] },
      { path: '**', component: NotFoundComponent },
      { path: '', redirectTo: '/home', pathMatch: 'full', }
];
 
@NgModule({
    imports: [
        AuthModule, 
        RouterModule.forRoot(routes, {enableTracing: false, preloadingStrategy: PreloadAllModules
    })
    ],
    declarations: [ ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }