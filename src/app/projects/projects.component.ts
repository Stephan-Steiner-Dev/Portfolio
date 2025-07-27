import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { log } from 'node:console';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projectsData = [{
    'img': ['../../assets/images/content/Laptop(1).png', '../../assets/images/content/Laptop(2).png'],
    'name': 'Join',
    'content': `Task manager inspired by the Kanban System.
                Create and organize tasks using drag and drop functions,
                assign users and categories.`
  },
  {
    'img': ['../../assets/images/content/Pollo.png', '../../assets/images/content/Pollo(1).png'],
    'name': 'El Pollo Locco',
    'content': `Jump, run and throw game based on object-oriented approach.
                Help Pepe to find coins and tabasco salsa to fight against the crazy hen.`
  },
  {
    'img': ['../../assets/images/content/DABubble.png', '../../assets/images/content/DABubbleL(1).png'],
    'name': 'DABubble',
    'content': `This App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface,
                real-time messaging, and robust channel organization.`
  }]

  hover: boolean = false;
  hoveredIndex: number | null = null;

  onHoverStart(index: number) {
    this.hoveredIndex = index;
    this.hover = true;
  }

  onHoverEnd() {
    this.hoveredIndex = null;
    this.hover = false;
  }
}


