import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
// import * as firebase from 'firebase';
import * as firebase from 'firebase/app';
import 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class LoginAdminService {

  estaLogueado = true;

  constructor(private angularFireAuth: AngularFireAuth,
    private afs: AngularFirestore
    ) { }

  public loginWithEmail(email: string, password: string) {
    return this.angularFireAuth.auth.signInWithEmailAndPassword(
      email,
      password
    );
  }

  public getStatusAuth() {
    return this.angularFireAuth.authState;
    // console.log(this.estaLogueado);
    // return this.estaLogueado;
  }

  public logout() {
    return this.angularFireAuth.auth.signOut();
  }

  // Obtiene un usuario por uid
  public getUserById(documentId: string) {
    return this.afs.collection('/capin/users/user/').doc(documentId).snapshotChanges();
  }

  // Actualiza un usuario
  public updateUser(documentId: string, data: any) {
    // return this.afs.collection('/capin/users/user/').doc(documentId).set(data);
    return this.afs.collection('/capin/users/user/').doc(documentId).update(data);
  }


  // reset password
  public resetPassword(email: string) {

    const auth = firebase.auth();

    return auth.sendPasswordResetEmail(email)
      .then(() => console.log('email enviado'))
      .catch((error) => console.log(error));
  }
}
