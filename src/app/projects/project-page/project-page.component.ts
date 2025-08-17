import { Component } from '@angular/core';
import { SharedDataService } from '../../shared/shared-data.service';
import { CommonModule} from "@angular/common";

@Component({
  selector: 'app-project-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-page.component.html',
  styleUrl: './project-page.component.scss'
})
export class ProjectPageComponent {
  constructor(public sharedData: SharedDataService) {
  }

  goForward() {
    if(this.sharedData.projectPageIndex < 2){
    this.sharedData.projectPageIndex++
    } else {
      this.sharedData.projectPageIndex = 0
    }
  }

  goBack() {
    if(this.sharedData.projectPageIndex > 0){
    this.sharedData.projectPageIndex--
    } else {
      this.sharedData.projectPageIndex = 2
    }
  }
}