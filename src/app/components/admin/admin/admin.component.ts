import { Component, OnInit } from '@angular/core';
import { LoginAdminService } from '../../../services/account/login-admin.service';
import { User } from '../../../interfaces/user';

declare function init_plugin();

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  user: User;

  constructor(private _authService: LoginAdminService) {
    this.userById();
   }

  ngOnInit() {
    init_plugin();
  }

  // TODO: get user by id
  userById() {
    this._authService.getStatusAuth().subscribe(
      (status) => {

        console.log(status.uid);
        if ( status ) {
          this._authService.getUserById(status.uid)
          .subscribe(
            (resp: any) => {
              this.user = resp.payload.data();
              // console.log( this.user );
            }
          );
        }
      }
    );
  }

}
