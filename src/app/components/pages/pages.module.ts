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
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { GaleriaComponent } from './galeria/galeria.component';
import { HttpClientModule } from '@angular/common/http';
import { AvatarPipe } from '../../pipes/avatar.pipe';
import { GaleriaDetailComponent } from './galeria/galeria-detail.component';
import { LightboxModule } from 'ngx-lightbox';

@NgModule({
  declarations: [
    HomeComponent,
    PagesComponent,
    AdminComponent,
    OurServicesComponent,
    AboutComponent,
    ContactComponent,
    GaleriaComponent,
    GaleriaDetailComponent,
    AvatarPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    SharedModule,
    SharedAdminModule,
    PAGES_ROUTES,
    FormsModule,
    ReactiveFormsModule,
    LightboxModule
  ],
  exports: [
    PagesComponent,
    OurServicesComponent,
    AboutComponent,
    ContactComponent
  ]
})
export class PagesModule {}
