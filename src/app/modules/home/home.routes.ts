import { Routes } from "@angular/router";
import HomePageComponent from "./home-page/home-page.component";

export const homeRoutes: Routes = [
    {
        path: 'nuevo-informe',
        loadChildren: () => import('@modules/new-report/new-report.routes').then(m => m.newReportRoutes)
    },
    {
        path: 'lista',
        loadChildren: () => import('@modules/list/list.routes').then(m => m.listRoutes)
    },
    {
        path: '**',
        redirectTo: 'home',
    }
]