import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { SharedDataService } from '../../app/shared/shared-data.service';
import { TranslatePipe } from '@ngx-translate/core';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss',
    './projects.mobile.scss'
  ]
})
export class ProjectsComponent {
  readonly DESKTOP_BP = 1400;      // halte das mit _breakpoints.scss in sync
  isDesktop = false;

  constructor(private router: Router, public sharedData: SharedDataService, @Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.isDesktop = window.innerWidth <= this.DESKTOP_BP;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(e: UIEvent) {
    if (isPlatformBrowser(this.platformId)) {
      this.isDesktop = (e.target as Window).innerWidth <= this.DESKTOP_BP;
    }
  }

  projectsData = [{
    'img': 'assets/images/content/Laptop(1).png',
    'name': 'JOIN',
    'content': `Task manager inspired by the Kanban System.
                Create and organize tasks using drag and drop functions,
                assign users and categories.`
  },
  {
    'img': 'assets/images/content/Pollo.png',
    'name': 'EL_POLLO_LOCCO',
    'content': `Jump, run and throw game based on object-oriented approach.
                Help Pepe to find coins and tabasco salsa to fight against the crazy hen.`
  },
  {
    'img': 'assets/images/content/pokedex.png',
    'name': 'POKEDEX',
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


