import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../../../services/galery/gallery.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {
  titleBaner = 'Galería de imagenes';

  galerias: any[] = [];

  constructor(private _galeryService: GalleryService, private route: Router) {}

  ngOnInit() {
    this.obtenergalerias();
  }

  obtenergalerias() {
    this._galeryService.getAllGallery().subscribe(resp => {
      this.galerias = resp;
    });
  }

  getgaleria(slug: string) {
    this.route.navigate(['/galeria', slug]);
  }
}
