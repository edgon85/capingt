import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-widget-baner-pages',
  templateUrl: './widget-baner-pages.component.html',
  styleUrls: ['./widget-baner-pages.component.css']
})
export class WidgetBanerPagesComponent implements OnInit {

  @Input() title = '';
  @Input() subTitle = '';

  constructor() { }

  ngOnInit() {
  }

}
