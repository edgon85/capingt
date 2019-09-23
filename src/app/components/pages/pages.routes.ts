import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from '../admin/admin/admin.component';
import { DashboardComponent } from '../admin/dashboard/dashboard.component';
import { LoginGardGuard } from '../../services/gards/login-gard.guard';
import { OurServicesComponent } from './our-services/our-services.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';



const pagesRoutes: Routes = [

    {
        path: '', component: PagesComponent,
        children: [
            { path: 'inicio', component: HomeComponent },
            { path: 'servicios', component: OurServicesComponent },
            { path: 'acerca-de', component: AboutComponent },
            { path: 'contacto', component: ContactComponent },
            { path: '', redirectTo: 'inicio', pathMatch: 'full' },
        ]
    },
    {
        path: 'admin', component: AdminComponent,
         canActivate: [LoginGardGuard],
         children : [
             { path: 'dashboard', component: DashboardComponent},
    //         { path: 'producto/:categoria', component: ProductComponent},
             { path: '', redirectTo: '/admin/dashboard', pathMatch: 'full'}
         ]
    }
];


export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
