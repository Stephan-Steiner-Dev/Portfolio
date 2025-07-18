import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skill-set',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill-set.component.html',
  styleUrl: './skill-set.component.scss'
})
export class SkillSetComponent {
  icons = [
       {
    'title':'HTML',
    'url':'../../assets/icons/HTML-icon.png',
   },
   {
    'title':'CSS',
    'url':'../../assets/icons/CSS-icon.png',
   },
   {
    'title':'JavaScript',
    'url':'../../assets/icons/JS-icon.png',
   },
   {
    'title':'TypeScript',
    'url':'../../assets/icons/TS-icon.png',
   },
   {
    'title':'Angular',
    'url':'../../assets/icons/Angular-icon.png',
   },
   {
    'title':'Firebase',
    'url':'../../assets/icons/Firebase-icon.png',
   },
   {
    'title':'Git',
    'url':'../../assets/icons/Git-icon.png',
   },
   {
    'title':'REST-API',
    'url':'../../assets/icons/API-icon.png',
   },
   {
    'title':'Scrum',
    'url':'../../assets/icons/SCRUM-icon.png',
   },
   {
    'title':'Material Design',
    'url':'../../assets/icons/Material-Design-icon.png',
   }
  ]
}
