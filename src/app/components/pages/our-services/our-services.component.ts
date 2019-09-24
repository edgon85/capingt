import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.css']
})
export class OurServicesComponent implements OnInit {


  titleBaner = 'Nuestros servicios';
  subTitleBaner = 'Lo que hacemos';

  constructor() { }

  ngOnInit() {
  }

}
