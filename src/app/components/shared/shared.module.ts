import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { WidgetContactUsComponent } from './widget-contact-us/widget-contact-us.component';

@NgModule({
  declarations: [
    PageNotFoundComponent,
    NavbarComponent,
    FooterComponent,
    WidgetContactUsComponent
  ],
  imports: [
   // CommonModule
   RouterModule
  ]
  , exports: [
    PageNotFoundComponent,
    NavbarComponent,
    FooterComponent,
    WidgetContactUsComponent
  ]
})
export class SharedModule { }
