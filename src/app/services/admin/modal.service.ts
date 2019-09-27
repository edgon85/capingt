import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  public oculto = 'oculto';
  public data: any;

  constructor() { }

  public ocultarModal() {
    this.oculto = 'oculto';
  }

  public mostrarModal( data: any) {
    this.oculto = '';
    this.data = data;
  }
}
