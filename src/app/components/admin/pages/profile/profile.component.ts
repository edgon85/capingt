import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { LoginAdminService } from '../../../../services/account/login-admin.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  usuario: User;
  uid = '';

  imagenSubir: File;
  imagenTemp: string;

  passReset = false;

  constructor(
    private _userService: LoginAdminService,
    private storage: AngularFireStorage) {
    this.getUserById();
  }

  ngOnInit() {
  }


  // obtener los datos del usuario por uid
  getUserById() {
    this._userService.getStatusAuth().subscribe(
      (status) => {
        // console.log(status.uid);
        this.uid = status.uid;
        this._userService.getUserById(status.uid).subscribe(
          (data: any) => {
            // console.log(data.payload.data());
            this.usuario = data.payload.data();
            // console.log(this.usuario);


          }
        );
      }
    );
  }

  // actualizar los datos del usuario
  actualizarData(usuario: Map<string, any>) {

    // console.log(this.uid);
    this._userService.updateUser(this.uid, usuario)
      .then(
      (resp) => console.log('actualizado con exito!')
      )
      .catch(
        (e) => console.log('Ocurrio un error ' + e)
      );
  }

  // ----- seleccionar una imagen -----
  onFileSelected(archivo: File) {
    if (!archivo) {
      this.imagenSubir = null;
      return;
    }

    if ( archivo.type.indexOf('image') < 0 ) {
     // swal('Sólo imágenes', 'El archivo seleccionando no es una imagen', 'error');
     console.log('El archivo seleccionando no es una imagen');
      this.imagenSubir = null;
      return;
    }

    this.imagenSubir = archivo;

    // tslint:disable-next-line:prefer-const
    let reader = new FileReader();
    // tslint:disable-next-line:prefer-const
    let urlImageTemp = reader.readAsDataURL( archivo);
    reader.onloadend = () => this.imagenTemp = reader.result.toString();
  }

  // ----- para actualizar la imagen -----
  cambiarImagen() {

    // elimina el que ya existe
    if (this.usuario.avatar !== '') {
      this.storage.storage.refFromURL( this.usuario.avatar ).delete();
    }

    const file = this.imagenSubir;
    const keyName = this.usuario.name.toLowerCase().split(' ').join('-') + '-' + Date.now();
    const filePath = 'capin/usuarios/' + keyName;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);

    task.snapshotChanges().pipe(
      finalize(
      () => {
        fileRef.getDownloadURL().subscribe(
          (data) => {
            this._userService.updateUser(this.uid, {'avatar': data})
            .then(
            (resp) => console.log('actualizado con exito!')
            )
            .catch(
              (e) => console.log('Ocurrio un error ' + e)
            );
          }
        );
      })).subscribe();
  }

  // reset Password
  resetPassword() {
  // this._userService.resetPassword(this.usuario.email)
  this._userService.resetPassword(this.usuario.email)
    .then(() => this.passReset = true);
  }

}
