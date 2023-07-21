import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tab-view',
  templateUrl: './tab-view.component.html',
  styleUrls: ['./tab-view.component.scss'],
})
export class TabViewComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}

  redirect(route: string) {
    this.router.navigate([`${route}`], { relativeTo: this.route });
  }
  redirectHome() {
    this.router.navigate(['']);
  }
}
