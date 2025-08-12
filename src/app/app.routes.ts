import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ElPolloLoccoComponent } from './projects/project-pages/el-pollo-locco/el-pollo-locco.component';

export const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'el-pollo-locco', component: ElPolloLoccoComponent },
    // { path: 'join', component: JoinComponent },
    // { path: 'pokedex', component: PokedexComponent }
];
