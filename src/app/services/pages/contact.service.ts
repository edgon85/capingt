import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Message } from '../../interfaces/contact-mesaage';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private afs: AngularFirestore) { }


  newMessageContact( message: Message ) {
    return this.afs.collection('capin/messages/mensajes').add(message);
  }

}
