import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(public router: Router) {
    this.router.events.subscribe(() => (this.open = false));
  }

  open = false;

  toggleMenu() { this.open = !this.open; }
  @HostListener('window:keydown.escape') onEsc() { this.open = false; }

  currentLang: 'EN' | 'DE' = 'EN';
  switchLanguage(lang: 'EN' | 'DE') {
    this.currentLang = lang;
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
}
