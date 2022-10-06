import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { Session } from '../models/session.model';
import { AppState } from 'src/app/state/app.state';
import { Store } from '@ngrx/store';
import { selectActiveSessionState } from 'src/app/state/selectors/session.selectors';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  activeSession$: Observable<boolean | undefined>;

  constructor(
    private authService: AuthService,
    private router: Router,
    private store: Store<AppState>
  ){
    this.activeSession$ = this.store.select(selectActiveSessionState);
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.activeSession$.pipe(
      map((activeSession) => {
        if(activeSession){
          return true;
        }else{
          this.router.navigate(['auth/login']);
          return false;
        }
      })
    );
  }
}
