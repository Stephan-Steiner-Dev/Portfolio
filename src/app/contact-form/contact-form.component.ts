import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormfieldComponent } from '../formfield/formfield.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';

/**
 * The ContactFormComponent displays a contact section with a form and descriptive text.
 *
 * It encourages users to get in touch and highlights the developer’s interest in collaboration.
 * The component uses translation support and custom subcomponents for form fields and the footer.
 */
@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [
    CommonModule,
    FormfieldComponent,
    FooterComponent,
    FormsModule,
    TranslatePipe
  ],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss', './contact-form.mobile.scss']
})
export class ContactFormComponent {
  /**
   * The content displayed in the contact section.
   * Contains headline, subheadline, descriptive text, and a decorative image.
   *
   * @property {Array<{ headline: string; subHeadline: string; contactText: string; img: string }>} content
   * The array holding structured text and image data for the contact section.
   */
  content = [
    {
      headline: 'CONTACT ME',
      subHeadline: 'Ready to work together?',
      contactText: `Encourage people to contact you and describe what role you are interested in.
                    Express confidence in your ability to make a meaningful contribution to a team through your expertise
                    and enthusiasm for improving your skills.<br><br>Show interest in contributing to a new project,
                    while highlighting the value and skills you can bring to the table.`,
      img: 'assets/images/content/contact-arrow.png'
    }
  ];
}