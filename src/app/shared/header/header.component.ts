import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, HostListener, inject, PLATFORM_ID } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

// v17: Pipe + Directive importieren, Service injizieren
import { TranslateService, TranslatePipe, TranslateDirective } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslatePipe, TranslateDirective],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', './header.mobile.scss'],
})
export class HeaderComponent {
  // SSR/Hydration: Umgebung ermitteln
  private platformId = inject(PLATFORM_ID);
  private isBrowser = isPlatformBrowser(this.platformId);

  open = false;
  currentLang: 'EN' | 'DE' = 'EN';

  constructor(public router: Router, private translate: TranslateService) {
    // Menü bei Navigation schließen (safe für SSR)
    this.router.events.subscribe(() => (this.open = false));

    // Sprachen registrieren
    this.translate.addLangs(['en', 'de']);

    // Initialsprache bestimmen (nur im Browser Zugriff auf navigator/localStorage)
    let initial: 'en' | 'de' = 'en';

    if (this.isBrowser) {
      const stored = localStorage.getItem('lang'); // safe: nur im Browser
      const browser = (this.translate.getBrowserLang() || '').toLowerCase();

      initial =
        stored === 'de' || stored === 'en'
          ? (stored as 'de' | 'en')
          : browser.startsWith('de')
          ? 'de'
          : 'en';

      document.documentElement.lang = initial; // <html lang="...">
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

    // Nur im Browser persistieren / DOM anfassen
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

