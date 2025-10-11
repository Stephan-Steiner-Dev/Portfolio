import { Component } from '@angular/core';

/**
 * The CircleBadgeComponent displays a circular badge with a background image,
 * rotating text, and a central logo image.
 *
 * It is used as a decorative or branding element across the application,
 * typically in sections like testimonials or headers.
 */
@Component({
  selector: 'app-circle-badge',
  standalone: true,
  templateUrl: './circle-badge.component.html',
  styleUrls: ['./circle-badge.component.scss']
})
export class CircleBadgeComponent {
  /**
   * Text displayed around the circular badge.
   */
  circleText = 'Stephan Steiner - Frontend Developer - Stephan Steiner - Frontend Developer -';

  /**
   * Path to the background image used inside the badge.
   */
  bgImage = 'assets/images/content/testimonials-background(2).png';

  /**
   * Path to the central logo image displayed in the middle of the badge.
   */
  logoImage = 'assets/icons/my-icon.png';
}