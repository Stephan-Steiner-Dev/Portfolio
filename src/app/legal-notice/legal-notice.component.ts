import { Component } from '@angular/core';
import { FooterComponent } from '../shared/footer/footer.component';
import { TranslatePipe } from '@ngx-translate/core';


@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [FooterComponent, TranslatePipe],
  templateUrl: './legal-notice.component.html',
  styleUrls: ['./legal-notice.component.scss', './legal-notice.mobile.scss']
})
export class LegalNoticeComponent {

}
