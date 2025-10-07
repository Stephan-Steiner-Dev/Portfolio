import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, HostListener, inject, PLATFORM_ID } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { TranslateService, TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslatePipe],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', './header.mobile.scss'],
})
export class HeaderComponent {
  private platformId = inject(PLATFORM_ID);
  private isBrowser = isPlatformBrowser(this.platformId);
  open = false;
  currentLang: 'EN' | 'DE' = 'EN';

  constructor(public router: Router, private translate: TranslateService) {
    this.router.events.subscribe(() => (this.open = false));
    this.translate.addLangs(['en', 'de']);
    let initial: 'en' | 'de' = 'en';

    if (this.isBrowser) {
      const stored = localStorage.getItem('lang');
      const browser = (this.translate.getBrowserLang() || '').toLowerCase();

      initial =
        stored === 'de' || stored === 'en'
          ? (stored as 'de' | 'en')
          : browser.startsWith('de')
          ? 'de'
          : 'en';
      document.documentElement.lang = initial;
    }
    this.translate.use(initial);
    this.currentLang = initial === 'de' ? 'DE' : 'EN';
  }

  toggleMenu() { this.open = !this.open; }
  @HostListener('window:keydown.escape') onEsc() { this.open = false; }

  switchLanguage(lang: 'EN' | 'DE') {
    this.currentLang = lang;
    const code: 'en' | 'de' = lang === 'DE' ? 'de' : 'en';
    this.translate.use(code);
    if (this.isBrowser) {
      localStorage.setItem('lang', code);
      document.documentElement.lang = code;
    }
  }

  toHomeSection() {
    const goTop = () => {
      if (this.isBrowser) {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      }
    };

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