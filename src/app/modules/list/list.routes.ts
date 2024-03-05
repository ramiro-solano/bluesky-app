import { Routes } from "@angular/router";
import { ListPageComponent } from "./list-page/list-page.component";

export const listRoutes: Routes = [
    {
        path: '',
        component: ListPageComponent
    },
    {
        path: 'productos',
        loadChildren: () => import('@modules/products/products.routes').then(m => m.ProductsRoutes)
    },
    {
        path: 'servicios',
        loadChildren: () => import('@modules/services/services.routes').then(m => m.ServicesRoutes)
    }
]