import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

/**
 * Bootstraps the Angular application in the browser using the root AppComponent
 * and the client-side configuration.
 *
 * This is the main entry point for the Angular app on the client side.
 * If an error occurs during bootstrapping, it will be logged to the console.
 */
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
