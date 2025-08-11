import { Component } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { SkillSetComponent } from '../skill-set/skill-set.component';
import { ProjectsComponent } from '../projects/projects.component';
import { TestimonialsComponent } from '../testimonials/testimonials.component';
import { ContactFormComponent } from '../contact-form/contact-form.component'
import { HeaderComponent } from '../shared/header/header.component';
import { AboveTheFoldComponent } from '../above-the-fold/above-the-fold.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [AboutComponent,
    SkillSetComponent,
    ProjectsComponent,
    TestimonialsComponent,
    ContactFormComponent,
    HeaderComponent,
    AboveTheFoldComponent
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})

export class LandingPageComponent {

}
