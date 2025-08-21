import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  constructor(private router: Router) {
  }

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

  toLegalNotice() {
    const goTop = () => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    this.router.navigate(['/legal-notice']).then(() => goTop());
  }
}
