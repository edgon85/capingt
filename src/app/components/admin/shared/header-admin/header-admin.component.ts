import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { LoginAdminService } from 'src/app/services/account/login-admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  // styleUrls: ['./sidebar-admin.component.css']
  styleUrls: ['../sidebar-admin/sidebar-admin.component.css']
})
export class HeaderAdminComponent implements OnInit {

  @Input() data: User;

  constructor(
    private _authService: LoginAdminService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  // TODO: logout
  serrarSesion() {
    this._authService.logout()
    .then(
      (resp) => {
      // console.log('Sesion crerrada!' , resp);
      this.router.navigate(['/login']);
    })
    .catch(
      (error) => {
       console.log( error );
      });
  }

}
