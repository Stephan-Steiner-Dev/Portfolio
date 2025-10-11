import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, HostListener, inject, PLATFORM_ID } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { TranslateService, TranslatePipe } from '@ngx-translate/core';

/**
 * The HeaderComponent displays the main navigation bar of the application.
 *
 * It manages routing, language selection, and menu toggling behavior,
 * adapting to both desktop and mobile layouts. The component also ensures
 * correct language persistence using local storage and updates the
 * `<html>` language attribute accordingly.
 */
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslatePipe],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', './header.mobile.scss'],
})
export class HeaderComponent {
  /**
   * Platform identifier used to determine whether the code is running in the browser.
   */
  private platformId = inject(PLATFORM_ID);

  /**
   * Indicates whether the current platform is the browser (not server-side rendering).
   */
  private isBrowser = isPlatformBrowser(this.platformId);

  /**
   * Indicates whether the mobile menu is currently open.
   */
  open = false;

  /**
   * The current active language code used for UI text.
   * Possible values: `'EN'` or `'DE'`.
   */
  currentLang: 'EN' | 'DE' = 'EN';

  /**
   * Creates an instance of HeaderComponent.
   *
   * @param {Router} router - Angular Router for handling navigation.
   * @param {TranslateService} translate - Service from ngx-translate for handling localization.
   */
  constructor(public router: Router, private translate: TranslateService) {
    // Close the menu automatically when navigation occurs.
    this.router.events.subscribe(() => (this.open = false));

    // Configure supported languages.
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

  /**
   * Toggles the visibility of the mobile navigation menu.
   */
  toggleMenu(): void {
    this.open = !this.open;
  }

  /**
   * Closes the mobile navigation menu when the Escape key is pressed.
   */
  @HostListener('window:keydown.escape')
  onEsc(): void {
    this.open = false;
  }

  /**
   * Switches the active language between English and German.
   * Updates ngx-translate, local storage, and the HTML lang attribute.
   *
   * @param {'EN' | 'DE'} lang - The language code to activate.
   */
  switchLanguage(lang: 'EN' | 'DE'): void {
    this.currentLang = lang;
    const code: 'en' | 'de' = lang === 'DE' ? 'de' : 'en';
    this.translate.use(code);

    if (this.isBrowser) {
      localStorage.setItem('lang', code);
      document.documentElement.lang = code;
    }
  }

  /**
   * Navigates to the home section of the site.
   * If already on the home route, smoothly scrolls to the top.
   */
  toHomeSection(): void {
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