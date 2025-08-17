import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  constructor() { }
  
  public projectPageIndex: number = 0;
  
  projectData = [
    {
      projectName: 'Join',
      headline: 'Description',
      descriptionText: `Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.`,
      subheadline: 'Implementation Details',
      detailText: `Join was a group effort. Together with two other colleagues, our task included dividing the project into different parts and organizing them via Github. My role was the add task and the task board. For the backend, we used Firebase.`,
      duration: 'Duration: 6 weeks',
      image: '../../../../assets/images/content/join.png',
      projectUrl: 'https://stephan-steiner.developerakademie.net/Join/index.html',
      projectGitHub: 'https://github.com/Paveluschka250/join',
      icons: [
        { src: '../../../../assets/icons/JS-icon.png', label: 'JavaScript' },
        { src: '../../../../assets/icons/HTML-icon.png', label: 'HTML' },
        { src: '../../../../assets/icons/CSS-icon.png', label: 'CSS' },
        { src: '../../../../assets/icons/Firebase-icon.png', label: 'Firebase' }
      ]
    },
    {
      projectName: 'El Pollo Loco',
      headline: 'Description',
      descriptionText: `Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco
                         salsa to fight against the crazy hen.`,
      subheadline: 'Implementation Details',
      detailText: `Short text that describes your role or the workflow for this specific project. Let a recruiter
                    know more about your knowledge and ability to work independently or collaboratively in a structured way.`,
      duration: 'Duration: 3 weeks',
      image: '../../../assets/images/content/Pollo.png',
      projectUrl: 'https://stephan-steiner.developerakademie.net/13-2D%20Spiel/index.html',
      projectGitHub: 'https://github.com/ElStephano/El-Pollo-Locco',
      icons: [
        { src: '../../../../assets/icons/JS-icon.png', label: 'JavaScript' },
        { src: '../../../../assets/icons/HTML-icon.png', label: 'HTML' },
        { src: '../../../../assets/icons/CSS-icon.png', label: 'CSS' }
      ]

    },
    {
      projectName: 'Pokedex',
      headline: 'Description',
      descriptionText: `An app with complete data on all Pokemon. It has a search function and many other features.`,
      subheadline: 'Implementation Details',
      detailText: `One of my first projects. This was the first time I worked with an API in combination with JavaScript.`,
      duration: 'Duration: 3 weeks',
      image: '../../../../assets/images/content/pokedex.png',
      projectUrl: 'https://stephan-steiner.developerakademie.net/12Pokedex/index.html',
       projectGitHub: 'https://github.com/ElStephano/Pokedex',
      icons: [
        { src: '../../../../assets/icons/JS-icon.png', label: 'JavaScript' },
        { src: '../../../../assets/icons/HTML-icon.png', label: 'HTML' },
        { src: '../../../../assets/icons/CSS-icon.png', label: 'CSS' },
        { src: '../../../../assets/icons/API-icon.png', label: 'REST-API' }
      ]
    },
  ]
}
