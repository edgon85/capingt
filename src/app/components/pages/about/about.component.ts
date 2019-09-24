import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  imagesPath = 'assets/pages/images/about/';

  titleBaner = 'Sobre nosotros';

  constructor() { }

  ngOnInit() {
  }

}
