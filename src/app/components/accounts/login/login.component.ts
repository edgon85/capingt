import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginAdminService } from '../../../services/account/login-admin.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

declare function init_plugin_login();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string = null;
  password: string = null;

  constructor(
    private _loginAdminService: LoginAdminService,
    private router: Router
  ) {
    this.checkLogin();
  }

  ngOnInit() {
    init_plugin_login();
  }

  ingresar(data: NgForm) {
    this.email = data.value.email;
    this.password = data.value.password;

    this._loginAdminService
      .loginWithEmail(this.email, this.password)
      .then(resp => {
        this.router.navigate(['/admin']);
      })
      .catch(error => {
        // console.log('Ocurrio un error!!', error.message);
        Swal.fire({
          type: 'error',
          title: 'Uups...',
          text: 'Correo o Contraseña incorrecta!',
          // footer: '<a href>Why do I have this issue?</a>'
        });
      });
    // if ( this.email === 'admin' && this.password === '123456') {
    //   this.router.navigate(['/admin']);
    // }
  }

  // reset Password
  resetPassword(data: any) {
    this._loginAdminService
      .resetPassword(data.email)
      .then(() => {
        // Swal.fire({
        //   position: 'center',
        //   type: 'success',
        //   title: 'Restablecer solicitado. Revise sus instrucciones de correo electrónico. ' + data.email,
        //   showConfirmButton: false,
        //   timer: 2500
        // });
      });

    this.router.navigate(['/reset-contraseña']);
  }


  checkLogin() {
    this._loginAdminService.getStatusAuth().subscribe(
      (resp) => {
       // console.log(resp);
        if (resp !== null) {
          this.router.navigate(['/admin']);
        }
      }
    );
  }
}
