import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../../../../services/admin/messages.service';
import { ModalService } from '../../../../services/admin/modal.service';

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
