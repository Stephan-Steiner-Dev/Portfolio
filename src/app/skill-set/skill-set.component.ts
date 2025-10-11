import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

/**
 * The SkillSetComponent displays a collection of technical skills
 * with corresponding icons and includes an interactive "peel" effect.
 *
 * It visually presents the developer’s technology stack while
 * offering a playful user interaction through hover and click events.
 */
@Component({
  selector: 'app-skill-set',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './skill-set.component.html',
  styleUrls: ['./skill-set.component.scss', './skill-set.mobile.scss']
})
export class SkillSetComponent {
  /**
   * List of skills and their corresponding icon paths.
   *
   * @property {string} title - The name of the skill or technology.
   * @property {string} url - Path to the icon image representing the skill.
   */
  icons = [
    { title: 'HTML', url: 'assets/icons/HTML-icon.png' },
    { title: 'CSS', url: 'assets/icons/CSS-icon.png' },
    { title: 'JavaScript', url: 'assets/icons/JS-icon.png' },
    { title: 'TypeScript', url: 'assets/icons/TS-icon.png' },
    { title: 'Angular', url: 'assets/icons/Angular-icon.png' },
    { title: 'Firebase', url: 'assets/icons/Firebase-icon.png' },
    { title: 'Git', url: 'assets/icons/Git-icon.png' },
    { title: 'REST-API', url: 'assets/icons/API-icon.png' },
    { title: 'Scrum', url: 'assets/icons/SCRUM-icon.png' },
    { title: 'Material Design', url: 'assets/icons/Material-Design-icon.png' }
  ];

  /**
   * Default and revealed texts for the peel animation.
   */
  defaultText = 'Zieh mich ab!';
  peeledText = 'Überraschung!';

  /**
   * Paths to background and hover images used in the peel animation.
   */
  bgImage = 'assets/images/content/pull-to-peel-click.png';
  middleImage = 'assets/images/content/pull-to-peel-hover.png';

  /**
   * Animation state flags for peel interaction.
   */
  peeled = false;
  hovering = false;
  clicked = false;

  /**
   * Returns the current peel image based on hover and click state.
   *
   * @returns {string} Path to the current peel state image.
   */
  get peelImage(): string {
    if (this.clicked) return 'assets/images/content/pull-to-peel-click.png';
    if (this.hovering) return 'assets/images/content/pull-to-peel-hover.png';
    return 'assets/images/content/pull-to-peel.png';
  }

  /**
   * Handles hover start events for the peel interaction.
   * Activates the hover state unless the peel is already clicked.
   */
  onHoverStart(): void {
    if (!this.clicked) {
      this.hovering = true;
    }
  }

  /**
   * Handles hover end events for the peel interaction.
   * Deactivates the hover state unless the peel is clicked.
   */
  onHoverEnd(): void {
    if (!this.clicked) {
      this.hovering = false;
    }
  }

  /**
   * Handles the peel click interaction.
   * Toggles between clicked and peeled states based on current interaction.
   */
  peelOff(): void {
    if (this.hovering) {
      this.clicked = !this.clicked;
      this.hovering = false;
    } else if (this.peeled) {
      this.clicked = !this.clicked;
      this.peeled = false;
    } else if (this.clicked) {
      this.clicked = !this.clicked;
    } else {
      this.clicked = false;
      this.peeled = false;
    }
  }
}