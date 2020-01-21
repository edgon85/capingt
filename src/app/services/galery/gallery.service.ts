import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  urlProduct = 'https://heroes-app-22dc0.firebaseio.com';

  constructor(private http: HttpClient) {}

  // ====================================================
  // Obtiene todos los proyectos
  // ====================================================
  public getAllGallery() {
    const url = this.urlProduct + '/capin/galeria.json';

    return this.http.get(url).pipe(map(this.crearArreglo));
  }

  public getOneGallery(slug: string) {
    const url = this.urlProduct + `/capin/galeria/${slug}.json`;

    return this.http.get(url);
  }

  // ====================================================
  // Conviert los datos d firebase a un arreglo para que
  // pueda recorerlos en el template
  // ====================================================
  private crearArreglo(galleryObj: object) {
    const galerias: any[] = [];
    Object.keys(galleryObj).forEach(key => {
      const producto = galleryObj[key];
      producto.id = key;
      // console.log( producto);
      galerias.push(producto);
    });

    if (galleryObj === null) {
      return [];
    }
    return galerias;
  }
}
