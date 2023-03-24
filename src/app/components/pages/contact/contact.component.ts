import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';
import { Message } from '../../../interfaces/contact-mesaage';
import { ContactService } from '../../../services/pages/contact.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  email1 = 'gerencia@capingt.com';
  email2 = 'operaciones@capingt.com';
  email3 = 'comercializacion@capingt.com';
  phone1 = '42768937';
  phone2 = '';
  facebookUrl = 'https://www.facebook.com/CAP-IN-Capacitaci%C3%B3n-y-Asesor%C3%ADa-Profesional-e-Innovadora-2378216642421046/';
  twitterUrl = '#';
  instagramUrl = '#';


  titleBaner = 'Contacto';

  data: Message = {
    name: '',
    email: '',
    phone: '',
    message: '',
    timestamp: ''
  };

  forma: FormGroup;
  date: any = new Date();

  constructor(
    private _contactService: ContactService,
    private router: Router
    ) {

    // this.date = new Date();

    this.forma = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')
      ]),
      phone: new FormControl('', Validators.required),
      message: new FormControl('', Validators.required),
      timestamp: new FormControl('' + this.date)
    });

  }

  ngOnInit() {
  }


  sendMessage() {
   // console.log(this.forma.value);

    this._contactService.newMessageContact(this.forma.value)
      .then(
        (resp) => {
          // console.log('Mensaje enviado satisfactoriamente');
          Swal.fire({
            position: 'top-end',
            type: 'success',
            title: 'Su mensaje a sido enviado, pronto nos comunicaremos con usted',
            showConfirmButton: false,
            timer: 2500
          });
          this.forma.reset({
            Message: {
              name: '',
              email: '',
              phone: '',
              message: '',
              timestamp: ''
            }
          });
        }
      )
      .catch(
        (e) => {
          Swal.fire({
            type: 'error',
            title: 'Uups...',
            text: 'Algo salió mal!',
            // footer: '<a href>Why do I have this issue?</a>'
          }).then(
            (resul) => this.router.navigate(['/.inicio'])
          );
        }
      );
  }

}
