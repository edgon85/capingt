import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderAdminComponent } from './shared/header-admin/header-admin.component';
import { SidebarAdminComponent } from './shared/sidebar-admin/sidebar-admin.component';
import { BreadcrumbAdminComponent } from './shared/breadcrumb-admin/breadcrumb-admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { CommonModule } from '@angular/common';
import { ModalMessageComponent } from './shared/modal-message/modal-message.component';

@NgModule({
  declarations: [
    HeaderAdminComponent,
    SidebarAdminComponent,
    BreadcrumbAdminComponent,
    DashboardComponent,
    MessagesComponent,
    ModalMessageComponent
  ],
  imports: [
    RouterModule,
    CommonModule
  ],
  exports: [
    HeaderAdminComponent,
    SidebarAdminComponent,
    BreadcrumbAdminComponent,
    DashboardComponent,
    MessagesComponent,
    ModalMessageComponent
  ]
})
export class SharedAdminModule {}
