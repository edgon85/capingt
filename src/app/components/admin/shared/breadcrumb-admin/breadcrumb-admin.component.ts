import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';
import { NameRoutesService } from '../../../../services/utils/name-routes.service';

@Component({
  selector: 'app-breadcrumb-admin',
  templateUrl: './breadcrumb-admin.component.html',
  styles: []
})
export class BreadcrumbAdminComponent implements OnInit {
  titulo: string;

  constructor(
    private _serviceNameRouter: NameRoutesService,
    private title: Title
  ) {
    this._serviceNameRouter.getDataRoute().subscribe(data => {
      // console.log(data);
      this.titulo = data.titulo;
      this.title.setTitle('Cap in | ' + this.titulo);
    });
  }

  ngOnInit() {}
}
