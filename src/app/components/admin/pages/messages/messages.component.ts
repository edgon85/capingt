import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../../../../services/admin/messages.service';
import { ModalService } from '../../../../services/admin/modal.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  messages = [];

  noMensajes = false;

  constructor(
    private _messageService: MessagesService,
    private _modalService: ModalService
  ) {
    this.getAllMesages();
  }

  ngOnInit() {
    this.getAllMesages();
  }

  getAllMesages() {
    this._messageService.getMessages().subscribe(data => {
        this.noMensajes = true;
        this.messages = [];

        data.forEach((messageData: any) => {
          this.noMensajes = false;
          this.messages.push({
            id: messageData.payload.doc.id,
            data: messageData.payload.doc.data()
          });
        });
    });
  }


  deleteMessage(documentId: any) {
    // console.log('-> ' + documentId);

    Swal.fire({
      title: 'Estás seguro?',
      text: 'No podra revertir esto!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        this.funcionEliminar(documentId);
        Swal.fire(
          'Eliminado!',
          'El mensaje ha sido eliminado.',
          'success'
        );
      }
    });


    // this._messageService.deleteMessage(documentId)
    //   .then(
    //     (resp) => {
    //       console.log('eliminado Satisfactoriamente');
    //     }
    //   )
    //   .catch(
    //     (e) => console.log('Ocurrio un error' + e)
    //   );
  }

  funcionEliminar(documentId: any) {
    this._messageService.deleteMessage(documentId)
          .then(
            (resp) => {
              console.log('eliminado Satisfactoriamente');
            }
          )
          .catch(
            (e) => console.log('Ocurrio un error' + e)
          );
  }


  abrirModal(data: any) {
    this._modalService.mostrarModal(data);
  }
}
