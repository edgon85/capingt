import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

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

  // Obtiene un gato
  public getUserById(documentId: string) {
    return this.afs.collection('/capin/users/user/').doc(documentId).snapshotChanges();
  }

  // public getStatus() {
  //   console.log(this.estaLogueado);
  //   return this.estaLogueado ;
  //  }
}
