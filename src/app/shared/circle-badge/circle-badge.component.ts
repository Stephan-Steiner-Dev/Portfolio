import { Component } from '@angular/core';

@Component({
  selector: 'app-circle-badge',
  standalone: true,
  templateUrl: './circle-badge.component.html',
  styleUrls: ['./circle-badge.component.scss']
})
export class CircleBadgeComponent {
  // Der Text, der einmal komplett um den Kreis laufen soll
  circleText = 'Stephan Steiner - Frontend Developer - Stephan Steiner - Frontend Developer -';

  // Pfade zu Deinen Bildern
  bgImage = '../../assets/images/content/testimonials-background(2).png';
  logoImage = '../../assets/icons/my-icon.png';
}
