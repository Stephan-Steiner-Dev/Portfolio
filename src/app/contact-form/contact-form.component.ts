import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormfieldComponent } from '../formfield/formfield.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule,
    FormfieldComponent,
    FooterComponent,
    FormsModule
  ],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {
  content = [
    {
      "headline": "CONTACT ME",
      "subHeadline": "Ready to work together?",
      "contactText": `Encourage people to contact you and describe what role you are interested in.
                      Express confidence in your ability to make a meaningful contribution to a team through your expertise
                      and enthusiasm for improving your skills.<br><br>Show interest in contributing to a new project,
                      while highlighting the value and skills you can bring to the table.`,
      "img": "assets/images/content/contact-arrow.png"
    }
  ]

}
