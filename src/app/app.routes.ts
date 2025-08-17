import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProjectPageComponent} from './projects/project-page/project-page.component';

export const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'projects-page', component: ProjectPageComponent },
];
