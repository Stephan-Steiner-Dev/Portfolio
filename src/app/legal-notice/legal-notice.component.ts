import { Component } from '@angular/core';
import { FooterComponent } from '../shared/footer/footer.component';
import { TranslatePipe } from '@ngx-translate/core';

/**
 * The LegalNoticeComponent displays the legal notice (impressum)
 * section of the website.
 *
 * It provides required company or personal legal information and
 * includes a translated footer for consistent site navigation and branding.
 *
 * This component is standalone and relies on translation support
 * through ngx-translate.
 */
@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [FooterComponent, TranslatePipe],
  templateUrl: './legal-notice.component.html',
  styleUrls: ['./legal-notice.component.scss', './legal-notice.mobile.scss']
})
export class LegalNoticeComponent { }