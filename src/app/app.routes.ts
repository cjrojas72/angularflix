import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { MovieDetailsComponent } from './views/movie-details/movie-details.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'tvshows', component: HomeComponent },
    { path: 'movies', component: HomeComponent },
    { path: 'movie/:id', component: MovieDetailsComponent}
];
