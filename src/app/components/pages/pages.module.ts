import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';
import { PagesComponent } from './pages.component';
import { AdminComponent } from '../admin/admin/admin.component';
import { SharedAdminModule } from '../admin/admin.module';
import { OurServicesComponent } from './our-services/our-services.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    HomeComponent,
    PagesComponent,
    AdminComponent,
    OurServicesComponent,
    AboutComponent,
    ContactComponent,
  ],
  imports: [
    SharedModule,
    SharedAdminModule,
    PAGES_ROUTES
  ],
  exports: [
    PagesComponent,
    OurServicesComponent,
    AboutComponent,
    ContactComponent,
  ]
})
export class PagesModule { }
