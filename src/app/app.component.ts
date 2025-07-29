import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HeaderComponent } from './shared/header/header.component';
import { AboutComponent } from './about/about.component';
import { SkillSetComponent } from './skill-set/skill-set.component';
import { ProjectsComponent } from './projects/projects.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ContactFormComponent } from './contact-form/contact-form.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,
    RouterOutlet,
    LandingPageComponent,
    HeaderComponent,
    AboutComponent,
    SkillSetComponent,
    ProjectsComponent,
    TestimonialsComponent,
    ContactFormComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'stephan-steiner-dev';
}
