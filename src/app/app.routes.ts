import { Routes } from '@angular/router';
import HomePageComponent from '@modules/home/home-page/home-page.component';

export const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () => import('@auth/auth.routes').then(m => m.authRoutes)
    },
    {
        path: 'home',
        component : HomePageComponent,
        loadChildren: () => import('@modules/home/home.routes').then(m => m.homeRoutes)
    },
    {
        path: '**',
        redirectTo: 'auth',
     
    }
];
