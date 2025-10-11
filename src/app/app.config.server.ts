import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';

/**
 * Server-specific Angular application configuration.
 *
 * Extends the base `appConfig` with providers required for
 * server-side rendering (SSR) using Angular Universal.
 */
const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering()
  ]
};

/**
 * Combined configuration that merges the client and server settings.
 *
 * This merged configuration enables the application to run in both
 * browser and server environments with shared settings.
 */
export const config = mergeApplicationConfig(appConfig, serverConfig);