import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';
import { LoginComponent } from './components/accounts/login/login.component';
import { ResetPasswordComponent } from './components/accounts/login/reset-password.component';


const APP_ROUTERS: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'reset-contraseña', component: ResetPasswordComponent },
    { path: '**', component: PageNotFoundComponent },
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTERS, { useHash: true, scrollPositionRestoration: 'enabled' });
