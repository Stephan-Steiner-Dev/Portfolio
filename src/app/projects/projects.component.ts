import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { SharedDataService } from '../../app/shared/shared-data.service';
import { TranslatePipe } from '@ngx-translate/core';

/**
 * The ProjectsComponent displays a collection of projects with preview images and descriptions.
 *
 * It handles responsive behavior for desktop and mobile layouts,
 * manages hover states for interactivity, and enables navigation to
 * detailed project pages.
 *
 * This component interacts with the SharedDataService to share the
 * currently selected project index across different views.
 */
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss', './projects.mobile.scss']
})
export class ProjectsComponent {
  /**
   * Breakpoint width used to determine if the layout is in desktop mode.
   */
  readonly DESKTOP_BP = 1400;

  /**
   * Indicates whether the current viewport is considered desktop size.
   */
  isDesktop = false;

  /**
   * Creates an instance of ProjectsComponent.
   *
   * @param {Router} router - Angular router used for navigation between project pages.
   * @param {SharedDataService} sharedData - Service that manages shared project data and state.
   * @param {Object} platformId - Angular platform identifier for browser/server detection.
   */
  constructor(
    private router: Router,
    public sharedData: SharedDataService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    if (isPlatformBrowser(this.platformId)) {
      this.isDesktop = window.innerWidth <= this.DESKTOP_BP;
    }
  }

  /**
   * Updates the `isDesktop` flag on window resize to handle responsive layout changes.
   *
   * @param {UIEvent} e - The window resize event.
   */
  @HostListener('window:resize', ['$event'])
  onResize(e: UIEvent): void {
    if (isPlatformBrowser(this.platformId)) {
      this.isDesktop = (e.target as Window).innerWidth <= this.DESKTOP_BP;
    }
  }

  /**
   * Array of project data displayed in the component.
   *
   * @property {string} img - Path to the project preview image.
   * @property {string} name - Name of the project.
   * @property {string} content - Short description of the project.
   */
  projectsData = [
    {
      img: 'assets/images/content/Laptop(1).png',
      name: 'JOIN',
      content: `Task manager inspired by the Kanban System.
                Create and organize tasks using drag and drop functions,
                assign users and categories.`
    },
    {
      img: 'assets/images/content/Pollo.png',
      name: 'EL_POLLO_LOCCO',
      content: `Jump, run and throw game based on object-oriented approach.
                Help Pepe to find coins and tabasco salsa to fight against the crazy hen.`
    },
    {
      img: 'assets/images/content/DABubble.jpg',
      name: 'DABUBBLE',
      content: `In progress.`
    }
  ];

  /**
   * Indicates whether a project card is currently being hovered.
   */
  hover: boolean = false;

  /**
   * Index of the currently hovered project card.
   */
  hoveredIndex: number | null = null;

  /**
   * Handles hover start event on a project card.
   *
   * @param {number} index - The index of the hovered project.
   */
  onHoverStart(index: number): void {
    this.hoveredIndex = index;
    this.hover = true;
  }

  /**
   * Handles hover end event on a project card.
   */
  onHoverEnd(): void {
    this.hoveredIndex = null;
    this.hover = false;
  }

  /**
   * Navigates to the detailed project page for the selected project.
   * Updates the shared project index in SharedDataService.
   *
   * @param {number} i - The index of the selected project.
   */
  showDetails(i: number): void {
    if (i < 3) {
      this.router.navigate(['/projects-page']);
      this.sharedData.projectPageIndex = i;
    }
  }
}