import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { SharedDataService } from '../../app/shared/shared-data.service';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  constructor(private router: Router, public sharedData: SharedDataService) { }

  projectsData = [{
    'img': 'assets/images/content/Laptop(1).png',
    'name': 'Join',
    'content': `Task manager inspired by the Kanban System.
                Create and organize tasks using drag and drop functions,
                assign users and categories.`
  },
  {
    'img': 'assets/images/content/Pollo.png',
    'name': 'El Pollo Locco',
    'content': `Jump, run and throw game based on object-oriented approach.
                Help Pepe to find coins and tabasco salsa to fight against the crazy hen.`
  },
  {
    'img': 'assets/images/content/pokedex.png',
    'name': 'Pokedex',
    'content': `An app with complete data on all Pokemon. It has a search function and many other features.`
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

  showDetails(i: number) {
    if (i < 3) {
      this.router.navigate(['/projects-page']);
      this.sharedData.projectPageIndex = i
    }
  }
}


