import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-responsive-header',
  standalone: true,
  imports: [],
  templateUrl: './responsive-header.component.html',
  styleUrl: './responsive-header.component.scss'
})
export class ResponsiveHeaderComponent {
  constructor(public router: Router) {  }
  toHomeSection() {
    const goTop = () => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

    const isHome =
      this.router.url === '/' ||
      this.router.url === '' ||
      this.router.url.startsWith('/#');

    if (isHome) {
      goTop();
    } else {
      this.router.navigate(['/']).then(() => goTop());
    }
  }
}
