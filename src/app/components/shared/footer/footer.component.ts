import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  email1 = 'contacto@capingt.com';
  phone1 = '42768937';
  phone2 = '59483746';
  facebookUrl = 'https://www.facebook.com/CAP-IN-Capacitaci%C3%B3n-y-Asesor%C3%ADa-Profesional-e-Innovadora-2378216642421046/';
  twitterUrl = '#';
  instagramUrl = '#';
  weDevUrl = 'https://wedevgt.com/';

  year = new Date().getFullYear();

  constructor() {}

  ngOnInit() {
  }

}
