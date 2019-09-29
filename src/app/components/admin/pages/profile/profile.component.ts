import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { LoginAdminService } from '../../../../services/account/login-admin.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

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
    private storage: AngularFireStorage,
    private router: Router) {
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
      (resp) => {
        Swal.fire({
          position: 'center',
          type: 'success',
          title: 'Sus datos fueron actualizados!',
          showConfirmButton: false,
          timer: 2500
        });
      }
      )
      .catch(
        (e) => {
          // console.log('Ocurrio un error ' + e);
          Swal.fire({
            type: 'error',
            title: 'Uups...',
            text: 'Algo salió mal!',
            // footer: '<a href>Why do I have this issue?</a>'
          });
        }
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
      Swal.fire({
        type: 'error',
        title: 'Uups...',
        text: 'El archivo seleccionando no es una imagen!',
        footer: '<h5>Su imagen tiene que ser extensión .jpg o .png<h5>'
      });
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
            (resp) => {
              Swal.fire({
                position: 'center',
                type: 'success',
                title: 'Su imagen fue actualizado!',
                showConfirmButton: false,
                timer: 2500
              });
            }
            )
            .catch(
              (e) => {
                // console.log('Ocurrio un error ' + e);
                Swal.fire({
                  type: 'error',
                  title: 'Uups...',
                  text: 'Algo salió mal!',
                  // footer: '<a href>Why do I have this issue?</a>'
                });
              }
            );
          }
        );
      })).subscribe();
  }

  // reset Password
  resetPassword() {

    Swal.fire({
      title: 'Estás seguro?',
      text: 'Se le enviara un correo electrónico para cambiar la contraseña',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, enviar correo!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {

        this._userService.resetPassword(this.usuario.email)
          .then(() => this.passReset = true);

        Swal.fire(
          'Enviado!',
          'Revise su correo ' + this.usuario.email,
          'success'
        ).then(
          (_) => {
            this._userService.logout()
              .then(
                (resp) => this.router.navigate(['/login'])
              );
          }
        );

      }
    });

  }

}
