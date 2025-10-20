import { Routes } from '@angular/router';
import { HomeComponent } from './feature/home/home-component/home-component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home'
    }
];
