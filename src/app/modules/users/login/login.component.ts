import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { UIServiceService } from 'src/app/services/uiservice.service';
import { MatDialogRef } from '@angular/material/dialog';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UsersService]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private service: UsersService, private ui: UIServiceService,
    private ref: MatDialogRef<NavbarComponent>, private router: Router) {
    this.initForm()
   }

  ngOnInit() {
  }

  initForm(){
    this.loginForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required]
    });
  }


  DoLogin(){
    let s = this.ui.showSpinner();
    s.afterOpened().subscribe((_) => {
      this.service.Login(this.loginForm.value).subscribe(r => {
        if(r.state == 1){
          localStorage.setItem('mycompany_session', r.token.toString())
          s.close()
          this.ui.showSnackBar('Sesión iniciada con éxito', null, {
            duration: 2500
          });
          this.ref.close();
          this.router.navigate(['/dashboard'])
        }else{
          s.close()
          this.ui.showSnackBar(r.message.toString() || r.error.toString(), null, {
            duration: 2500
          });
        }
      })
    })

  }
}
