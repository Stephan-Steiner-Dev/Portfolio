import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  data = [{
    'pathIcon': '../../assets/icons/location-icon.png',
    'pathBanner': '../../assets/images/content/banner-yellow.png',
    'content': 'Based in Böblingen'
  },
  {
    'pathIcon': '../../assets/icons/location-icon.png',
    'pathBanner': '../../assets/images/content/banner-blue.png',
    'content': 'Open for businesstrips'
  },
  {
    'pathIcon': '../../assets/icons/location-icon.png',
    'pathBanner': '../../assets/images/content/banner-orange.png',
    'content': 'Open to work remote'
  }
  ]
}
