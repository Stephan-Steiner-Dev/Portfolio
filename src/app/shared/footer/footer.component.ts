import { Component } from '@angular/core';
import { Router } from '@angular/router';

/**
 * The FooterComponent provides the website’s footer section,
 * including navigation links to the home page and legal notice.
 *
 * It manages in-page scrolling behavior and route navigation
 * with smooth transitions for a better user experience.
 */
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss', './footer.mobile.scss']
})
export class FooterComponent {
  /**
   * Creates an instance of FooterComponent.
   *
   * @param {Router} router - Angular router used to navigate between routes.
   */
  constructor(private router: Router) {}

  /**
   * Navigates to the home section of the website.
   * If the user is already on the home route, it smoothly scrolls to the top.
   */
  toHomeSection(): void {
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

  /**
   * Navigates to the legal notice page and smoothly scrolls to the top.
   */
  toLegalNotice(): void {
    const goTop = () => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    this.router.navigate(['/legal-notice']).then(() => goTop());
  }
}