import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { SpinnerComponent } from '../components/spinner/spinner.component';

@Injectable({
  providedIn: 'root'
})
export class UIServiceService {

  constructor(private snack: MatSnackBar, private dialog: MatDialog) { }

  showSnackBar(message:string, action? : string, config? : object) : any{
    this.snack.open(message, action, config)
  }

  showSpinner(){
    return this.dialog.open(SpinnerComponent, {
      width: '150px',
      height: '150px',
      disableClose: true
    })
  }
}
