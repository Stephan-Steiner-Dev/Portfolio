import { ApplicationConfig } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';

import { provideTranslateService } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';

/**
 * Global Angular application configuration.
 *
 * This configuration defines the root providers for routing, hydration,
 * HTTP communication, and internationalization (i18n).
 *
 * It is used to bootstrap the Angular application and can be merged
 * with additional configurations, such as server-side rendering settings.
 */
export const appConfig: ApplicationConfig = {
  providers: [
    /**
     * Provides Angular router configuration and enables in-memory scrolling,
     * allowing anchor-based navigation and automatic scroll position restoration.
     */
    provideRouter(
      routes,
      withInMemoryScrolling({
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'enabled',
      })
    ),

    /**
     * Enables Angular hydration for server-side rendered applications (SSR).
     * Ensures that the client seamlessly resumes control of the DOM after SSR.
     */
    provideClientHydration(),

    /**
     * Provides the Angular HttpClient service for making HTTP requests.
     */
    provideHttpClient(),

    /**
     * Configures ngx-translate for internationalization (i18n) support.
     * Sets up translation file loading and default language options.
     */
    provideTranslateService({
      loader: provideTranslateHttpLoader({
        prefix: './assets/i18n/',
        suffix: '.json',
      }),
      fallbackLang: 'en',
      lang: 'en',
    }),
  ],
};

