import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GalleryService } from '../../../services/galery/gallery.service';
import { Lightbox } from 'ngx-lightbox/lightbox.service';

@Component({
  selector: 'app-galeria-detail',
  templateUrl: './galeria-detail.component.html',
  styleUrls: ['./galeria-detail.component.css']
})
export class GaleriaDetailComponent implements OnInit {
  titleBaner = '';
  proyecto: any = {};
  _albums: any[] = [];

  constructor(
    private router: ActivatedRoute,
    private _galeryService: GalleryService,
    private _lightbox: Lightbox
  ) {
    this.router.params.subscribe(param => {
      this.obtenerPhotos(param['slug']);
    });
  }

  ngOnInit() {}

  obtenerPhotos(slug: string) {
    this._galeryService.getOneGallery(slug).subscribe((resp: any) => {
      this.proyecto = resp;
      this.titleBaner = resp.title;
      // tslint:disable-next-line:forin
      for (const i in this.proyecto.images) {
        const album = {
          src: this.proyecto.images[i],
          caption: 'capin',
          thumb: this.proyecto.images[i]
        };

        this._albums.push(album);
      }
    });
  }

  open(index: number): void {
    // open lightbox
    this._lightbox.open(this._albums, index);
  }

  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }
}
