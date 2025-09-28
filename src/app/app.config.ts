// import { ApplicationConfig } from '@angular/core';
// import { provideRouter, withInMemoryScrolling } from '@angular/router';
// import { routes } from './app.routes';
// import { provideClientHydration } from '@angular/platform-browser';
// import { provideHttpClient } from '@angular/common/http';

// export const appConfig: ApplicationConfig = {
//   providers: [
//     provideRouter(
//       routes,
//       withInMemoryScrolling({
//         anchorScrolling: 'enabled',
//         scrollPositionRestoration: 'enabled',
//       })
//     ),
//     provideClientHydration(),
//     provideHttpClient(),
//   ],
// };
// src/app/app.config.ts
// src/app/app.config.ts


import { ApplicationConfig } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';

// ⬇️ Neue v17-API
import { provideTranslateService } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withInMemoryScrolling({
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'enabled',
      })
    ),
    provideClientHydration(),
    provideHttpClient(),

    // Loader & Defaults (lädt ./assets/i18n/{lang}.json)
    provideTranslateService({
      loader: provideTranslateHttpLoader({
        // relativ zum <base href>, robust für Subpfade
        prefix: './assets/i18n/',
        suffix: '.json',
      }),
      fallbackLang: 'en',
      lang: 'en',
    }),
  ],
};
