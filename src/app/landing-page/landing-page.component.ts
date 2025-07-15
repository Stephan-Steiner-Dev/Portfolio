import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  firstPart = 'Frontend';
  secondPart = 'DEVELOPER';

  get firstLetters() { return this.firstPart.split(''); }
  get secondLetters() { return this.secondPart.split(''); }
  constructor(){
    console.log()
  }
}
