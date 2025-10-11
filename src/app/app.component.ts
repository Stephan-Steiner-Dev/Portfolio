import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';

/**
 * The AppComponent is the root component of the application.
 *
 * It serves as the main entry point for the Angular app, providing
 * the base layout structure that includes the header and the router outlet
 * for displaying routed components.
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  /**
   * The title of the application, used for metadata or display purposes.
   */
  title = 'stephan-steiner-dev';
}