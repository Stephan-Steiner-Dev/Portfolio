import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-above-the-fold',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './above-the-fold.component.html',
  styleUrls: ['./above-the-fold.component.scss']
})
export class AboveTheFoldComponent {
  firstPart = 'Frontend';
  secondPart = 'DEVELOPER';

  get firstLetters() { return this.firstPart.split(''); }
  get secondLetters() { return this.secondPart.split(''); }
  constructor(){
    console.log()
  }
}
