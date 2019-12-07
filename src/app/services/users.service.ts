import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  httpOptions = ({
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('mycompany_session') || ''
    })
  })
  constructor(private http: HttpClient) { }

  private extractData(res) {
    let body = res;
    return body || [] || {}
  }

  public Login(form) : Observable<any>{
    return this.http.post(`${environment.local}` + '/users/login', {
      email: form.email,
      password: form.password
    }, this.httpOptions)
    .pipe(map(this.extractData));
  }

}
