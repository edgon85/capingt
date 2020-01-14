import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../../../services/admin/messages.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pathImage = 'assets/pages/images/home/';
  _altImage = 'cap in capacitación y asesoria';

  promoDate = true;
  titlePromo = '';
  imageUrl = '';
  textPromo = '';

  constructor(private _settingsService: MessagesService) {}

  ngOnInit() {
    this._settingsService.getEvento().subscribe((resp: any) => {
      // tslint:disable-next-line:prefer-const
      let datos = resp.payload.data();
      this.promoDate = datos.evento;
      this.titlePromo = datos.title;
      this.imageUrl = datos.imagen;
      this.textPromo = datos.text;
    });
  }
}
