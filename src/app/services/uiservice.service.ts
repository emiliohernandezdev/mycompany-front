import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class UIServiceService {

  constructor(private snack: MatSnackBar) { }

  showSnackBar(message:string, action? : string, config? : object) : any{
    this.snack.open(message, action, config)
  }

  showSpinner() : any{
    
  }
}
