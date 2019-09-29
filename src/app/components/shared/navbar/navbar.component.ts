import { Component, OnInit } from '@angular/core';
import { NameRoutesService } from 'src/app/services/utils/name-routes.service';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

declare function init_plugin_navbar();

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  titulo: string;

  constructor(
    private _serviceNameRouter: NameRoutesService,
    private title: Title,
    private meta: Meta
  ) {
    this._serviceNameRouter.getDataRoute().subscribe(data => {
      // console.log(data);
      this.titulo = data.titulo;
      this.title.setTitle('Cap in | ' + this.titulo);

      const metaTagDescription: MetaDefinition = {
        name: 'description',
        content: data.metaTag
      };
      const metaTagKeywords: MetaDefinition = {
        name: 'keywords',
        content: 'logistica de eventos, capacitaciónes, consultorías, representaciones'
      };

      this.meta.updateTag(metaTagDescription);
      this.meta.updateTag(metaTagKeywords);
    });
  }

  ngOnInit() {
    init_plugin_navbar();
  }
}
