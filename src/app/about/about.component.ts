import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';

/**
 * The AboutComponent displays personal or organizational information,
 * such as location, business trip availability, and remote work preference.
 *
 * This component is a standalone Angular component that renders
 * static data as feature banners with icons and translated text.
 */
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss', './about.mobile.scss']
})
export class AboutComponent {
  /**
   * A list of feature items displayed on the About page.
   * Each item includes an icon, a banner background, and localized text content.
   *
   * @property {Array<{ pathIcon: string; pathBanner: string; content: string }>} data
   * The collection of feature definitions.
   */
  data = [
    {
      pathIcon: 'assets/icons/location-icon.png',
      pathBanner: 'assets/images/content/banner-yellow.png',
      content: 'Based in Böblingen'
    },
    {
      pathIcon: 'assets/icons/businesstrip-icon.png',
      pathBanner: 'assets/images/content/banner-blue.png',
      content: 'Open for businesstrips'
    },
    {
      pathIcon: 'assets/icons/remote-icon.png',
      pathBanner: 'assets/images/content/banner-orange.png',
      content: 'Open to work remote'
    }
  ];
}
