import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pathImage = 'assets/pages/images/home/';
  _altImage = 'cap in capacitación y asesoria';

  constructor() { }

  ngOnInit() {
  }

}
