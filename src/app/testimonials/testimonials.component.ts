import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss', './testimonials.mobile.scss']
})

export class TestimonialsComponent {
  comments = [
    {
      'name': 'Paul Groß',
      'profession': 'Frontend Developer',
      'homepage': '',
      "image": "assets/images/content/testimonials-linked-in-black.png"
    },
    {
      'name': 'Jan Steiner',
      'profession': 'Frontend Developer',
      'homepage': 'https://www.linkedin.com/in/jan-steiner-4195a6320/',
      "image": "assets/images/content/testimonials-linked-in-black.png"
    },
    {
      'name': 'Martin Jaros',
      'profession': 'Frontend Developer',
      'homepage': 'https://www.martin-jaros.ch/',
      "image": "assets/images/content/testimonials-linked-in-black.png"
    }
  ]
}
