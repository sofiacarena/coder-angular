import { Component, Input, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { routeForTitle } from 'src/app/shared/models/nav.model';
import { User } from 'src/app/shared/models/user.model';
import { LayoutService } from 'src/app/shared/services/layout.service';
import { closeSession } from 'src/app/state/actions/session.actions';
import { AppState } from 'src/app/state/app.state';
import { selectActiveUserState } from 'src/app/state/selectors/session.selectors';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  route!: string;
  activeUser$: Observable<User | undefined>;

  constructor(
    private store: Store<AppState>,
    private layoutService: LayoutService,
    private router: Router
  ) {
    this.activeUser$ = this.store.select(selectActiveUserState);
  }

  ngOnInit(): void {
    this.route = this.layoutService.route;
  }

  onLogout() {
    this.store.dispatch(closeSession());
    this.router.navigate(['auth/login']);
  }

  get titleRoute(): string {
    return routeForTitle[this.route];
  }
}
