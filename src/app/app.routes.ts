import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProjectPageComponent } from './projects/project-page/project-page.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';

/**
 * Defines the main application routes.
 *
 * Each route maps a URL path to its corresponding component.
 * These routes are provided to the Angular router in `app.config.ts`.
 */
export const routes: Routes = [
  /**
   * Default route – displays the landing page component.
   */
  { path: '', component: LandingPageComponent },

  /**
   * Route for displaying detailed project information.
   */
  { path: 'projects-page', component: ProjectPageComponent },

  /**
   * Route for displaying the legal notice (impressum) section.
   */
  { path: 'legal-notice', component: LegalNoticeComponent }
];