import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CheckLoggedInGuard implements CanActivate {
constructor(private authService: AuthService,
            private router: Router) { }
 
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return this.authService.isAuthenticated()
      .map (isSignedIn => {
        if (isSignedIn) {
          this.router.navigateByUrl('albums');
        }
        return !isSignedIn;
      });
  }
}
