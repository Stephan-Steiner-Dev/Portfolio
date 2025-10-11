import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';

/**
 * Bootstraps the Angular application using the root AppComponent
 * and the server-side configuration.
 *
 * This entry point is used during server-side rendering (SSR)
 * to initialize the app with the appropriate providers and settings.
 *
 * @returns {Promise<ApplicationRef>} A promise that resolves when the application has been bootstrapped.
 */
const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;