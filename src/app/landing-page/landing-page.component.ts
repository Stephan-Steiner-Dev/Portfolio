import { Component } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { SkillSetComponent } from '../skill-set/skill-set.component';
import { ProjectsComponent } from '../projects/projects.component';
import { TestimonialsComponent } from '../testimonials/testimonials.component';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { AboveTheFoldComponent } from '../above-the-fold/above-the-fold.component';

/**
 * The LandingPageComponent serves as the main entry point of the application.
 *
 * It combines all primary sections of the portfolio or website,
 * including the header section, about section, skills, projects,
 * testimonials, and contact form.
 *
 * This component acts primarily as a structural container that assembles
 * other standalone components into a cohesive landing page layout.
 */
@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    AboutComponent,
    SkillSetComponent,
    ProjectsComponent,
    TestimonialsComponent,
    ContactFormComponent,
    AboveTheFoldComponent
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent { }