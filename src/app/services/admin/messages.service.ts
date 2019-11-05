import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(private firestore: AngularFirestore) { }

  // Obtiene todos los mensajes
  public getMessages() {
    return this.firestore.collection('/capin/messages/mensajes').snapshotChanges();
  }

  // Eliminar mensaje
  public deleteMessage(documentId: string) {
    return this.firestore.collection('/capin/messages/mensajes').doc(documentId).delete();
  }

  // Eliminar evento
  public getEvento() {
    return this.firestore.collection('/capin').doc('eventos').snapshotChanges();
  }
}
