import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe, TranslateDirective } from '@ngx-translate/core';

/**
 * The AboveTheFoldComponent displays the main headline section
 * that introduces the website or portfolio — typically the first visible area on load.
 *
 * It separates the title into two parts ("Frontend" and "DEVELOPER")
 * and exposes each as individual letters for visual animation or styling.
 */
@Component({
  selector: 'app-above-the-fold',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './above-the-fold.component.html',
  styleUrls: ['./above-the-fold.component.scss', './above-the-fold.mobile.scss']
})
export class AboveTheFoldComponent {
  /**
   * The first part of the title text.
   * Used to display the word "Frontend".
   */
  firstPart = 'Frontend';

  /**
   * The second part of the title text.
   * Used to display the word "DEVELOPER".
   */
  secondPart = 'DEVELOPER';

  isHovered = false;

  /**
   * Returns the letters of the first part as an array.
   * Useful for animating or styling each letter individually.
   *
   * @returns {string[]} Array of letters from the first part of the title.
   */
  get firstLetters(): string[] {
    return this.firstPart.split('');
  }

  /**
   * Returns the letters of the second part as an array.
   * Useful for animating or styling each letter individually.
   *
   * @returns {string[]} Array of letters from the second part of the title.
   */
  get secondLetters(): string[] {
    return this.secondPart.split('');
  }

  constructor() {}
}