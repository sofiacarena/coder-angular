import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { LayoutService } from './shared/services/layout.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private router: Router,
    private layoutService: LayoutService
  ) {
    this.router.events.subscribe((event) => {
      if(event instanceof NavigationStart){
        this.layoutService.route = event.url;
      }
    });
  }
}
