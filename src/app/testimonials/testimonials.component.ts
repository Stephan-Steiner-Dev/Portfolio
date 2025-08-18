import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {
  comments = [
    {
      'comment': `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Nesciunt dolor pariatur molestias quas fuga odit ex id facere optio.
                        Incidunt optio blanditiis quas in deleniti praesentium fuga soluta fugiat illum.`,
      'name': 'Jack',
      'profession': 'Frontend Developer'
    },
    {
      'comment': 'Ich habe mit Stephan im Projekt (Join) zusammengearbeitet und ihn dabei als sehr verlässlichen Teamkollegen erlebt. Man konnte sich immer darauf verlassen, dass er seine Aufgaben zuverlässig erledigt. Besonders schätze ich auch seinen sauberen, gut strukturierten Code, damit war die Zusammenarbeit im Team deutlich einfacher und angenehmer.',
      'name': 'Reacher',
      'profession': 'Frontend Developer'
    },
    {
      'comment': 'What a man',
      'name': 'Jason',
      'profession': 'Frontend Developer'
    }
  ]

}
