import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { WidgetContactUsComponent } from './widget-contact-us/widget-contact-us.component';
import { WidgetBanerPagesComponent } from './widget-baner-pages/widget-baner-pages.component';

@NgModule({
  declarations: [
    PageNotFoundComponent,
    NavbarComponent,
    FooterComponent,
    WidgetContactUsComponent,
    WidgetBanerPagesComponent
  ],
  imports: [
   // CommonModule
   RouterModule
  ]
  , exports: [
    PageNotFoundComponent,
    NavbarComponent,
    FooterComponent,
    WidgetContactUsComponent,
    WidgetBanerPagesComponent
  ]
})
export class SharedModule { }
