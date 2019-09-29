import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from '../admin/admin/admin.component';
import { DashboardComponent } from '../admin/dashboard/dashboard.component';
import { LoginGardGuard } from '../../services/gards/login-gard.guard';
import { OurServicesComponent } from './our-services/our-services.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MessagesComponent } from '../admin/pages/messages/messages.component';
import { ProfileComponent } from '../admin/pages/profile/profile.component';

 const _inicioTag = 'Capacitación y accesoria profesional e innovadora, capacitarse e innovar es superación y éxito';
 const _serviciosTag = 'logistica de eventos, capacitaciónes, consultorías, representaciones';
 // tslint:disable-next-line:max-line-length
 const _acercaDeTag = 'Ser reconocidos por brindar servicios basados principios éticos y morales, enfocados en la innovación, tendencia y calidad, aportando al país, ciudadanos más competitivos a nivel mundial.';
 const _contactoTag = 'contacto@capingt.com';

const pagesRoutes: Routes = [

    {
        path: '', component: PagesComponent,
        children: [
            { path: 'inicio', component: HomeComponent, data: {'titulo': 'Inicio', 'metaTag': _inicioTag} },
            { path: 'servicios', component: OurServicesComponent, data: {'titulo': 'Servicios', 'metaTag': _serviciosTag} },
            { path: 'acerca-de', component: AboutComponent, data: {'titulo': 'Acerca de', 'metaTag': _acercaDeTag} },
            { path: 'contacto', component: ContactComponent, data: {'titulo': 'Contacto', 'metaTag': _contactoTag} },
            { path: '', redirectTo: 'inicio', pathMatch: 'full' },
        ]
    },
    {
        path: 'admin', component: AdminComponent,
         canActivate: [LoginGardGuard],
         children : [
             { path: 'dashboard', component: DashboardComponent, data: {'titulo': 'Dashboard'}},
             { path: 'mensajes', component: MessagesComponent, data: {'titulo': 'Mensajes'}},
             { path: 'perfil', component: ProfileComponent, data: {'titulo': 'Perfil'}},
             { path: '', redirectTo: '/admin/dashboard', pathMatch: 'full'}
         ]
    }
];


export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
