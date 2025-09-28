import { Component } from '@angular/core';
import { FooterComponent } from '../shared/footer/footer.component';


@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './legal-notice.component.html',
  styleUrls: ['./legal-notice.component.scss', './legal-notice.mobile.scss']
})
export class LegalNoticeComponent {

}
