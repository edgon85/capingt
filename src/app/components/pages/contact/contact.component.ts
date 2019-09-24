import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
