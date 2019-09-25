import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.css']
})
export class OurServicesComponent implements OnInit {


  titleBaner = 'Nuestros servicios';
  subTitleBaner = 'Lo que hacemos';


  videoUrl = 'https://player.vimeo.com/video/362180793';
  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

}
