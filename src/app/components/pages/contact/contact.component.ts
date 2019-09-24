import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  email1 = 'contacto@capingt.com';
  phone1 = '42768937';
  phone2 = '59483746';
  facebookUrl = 'https://www.facebook.com/CAP-IN-Capacitaci%C3%B3n-y-Asesor%C3%ADa-Profesional-e-Innovadora-2378216642421046/';
  twitterUrl = '#';
  instagramUrl = '#';


  titleBaner = 'Contacto';

  data: any = {
    name: '',
    email: '',
    phone: '',
    message: '',
    timestamp: ''
  };

  forma: FormGroup;
  date: any;

  constructor() {

    this.date = new Date();

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
    console.log(this.forma.value);
  }

}
