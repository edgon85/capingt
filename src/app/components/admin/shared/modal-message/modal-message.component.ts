import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../../../services/admin/modal.service';

@Component({
  selector: 'app-modal-message',
  templateUrl: './modal-message.component.html',
  styleUrls: ['./modal-message.component.css']
})
export class ModalMessageComponent implements OnInit {

  public oculto = 'oculto';

  constructor(public _modalService: ModalService) {
  //  console.log(_modalService.data);
  }

  ngOnInit() {
  }

}
