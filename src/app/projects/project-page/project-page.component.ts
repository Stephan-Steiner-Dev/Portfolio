import { Component } from '@angular/core';
import { SharedDataService } from '../../shared/shared-data.service';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';

/**
 * The ProjectPageComponent displays detailed information about individual projects.
 *
 * It interacts with the SharedDataService to track and update the currently active
 * project index, allowing users to navigate forward or backward between projects.
 *
 * This component is standalone and supports translation for localized project content.
 */
@Component({
  selector: 'app-project-page',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss', './project-page.mobile.scss']
})
export class ProjectPageComponent {
  /**
   * Creates an instance of ProjectPageComponent.
   *
   * @param {SharedDataService} sharedData - The shared service managing project data and state.
   */
  constructor(public sharedData: SharedDataService) {}

  /**
   * Advances the project index to the next project.
   * Wraps back to the first project after reaching the last one.
   */
  goForward(): void {
    if (this.sharedData.projectPageIndex < 2) {
      this.sharedData.projectPageIndex++;
    } else {
      this.sharedData.projectPageIndex = 0;
    }
  }

  /**
   * Moves the project index to the previous project.
   * Wraps to the last project when reaching the beginning.
   */
  goBack(): void {
    if (this.sharedData.projectPageIndex > 0) {
      this.sharedData.projectPageIndex--;
    } else {
      this.sharedData.projectPageIndex = 2;
    }
  }
}