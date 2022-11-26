import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Persona } from '../interface/Persona';
import { Usuario } from '../interface/Usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = `${environment.UrlApiDoubleV}` 

  constructor(private http: HttpClient) {

   }

   getLogin({user, password}: Usuario){
    const url = `${this.apiUrl}api/Usuario/GetUsuarios/${user}/${password}`;
    return this.http.get<any>(url);
  }


}
