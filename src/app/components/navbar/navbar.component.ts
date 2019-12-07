import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from 'src/app/modules/users/login/login.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [AuthService]
})
export class NavbarComponent implements OnInit {

  constructor(public auth: AuthService, private dialog: MatDialog) { }

  ngOnInit() {
  }

  login(){
    this.dialog.open(LoginComponent, {
      width: '450px',
      height: '350px',
      disableClose: false
    });
  }

}
