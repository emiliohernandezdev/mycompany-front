import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public getSessionStatus(): boolean{
    let t = localStorage.getItem('mycompany_session')
    if(t == null || t == undefined){
      return false;
    }else{
      return true;
    }
  }
}
