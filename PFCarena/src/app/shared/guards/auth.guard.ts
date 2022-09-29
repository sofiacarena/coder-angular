import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Session } from '../models/session.model';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ){ }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.getSession().pipe(
      map((session: Session) => {
        if(session.activeSession){
          return true;
        }else{
          this.router.navigate(['auth/login']);
          return false;
        }
      })
    );
  }
}
