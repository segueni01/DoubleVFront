import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from '../interface/Persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private apiUrl = `${environment.UrlApiDoubleV}` 

  constructor(private http: HttpClient) { }


  getPersonas(): Observable<Persona[]>{
    const url = `${this.apiUrl}api/Persona/GetPersonas`;
    return this.http.get<Persona[]>(url);
  }

  addPersona({nombre, apellidos, numeroIdentificacion, email, tipoIdentificacion, user, password}: Persona): Observable<any>{
    const url = `${this.apiUrl}api/Persona/AddPersona`;
    return this.http.post(url, {
      nombre, 
      apellidos, 
      numeroIdentificacion, 
      email, 
      tipoIdentificacion, 
      user,
      password
    });
  }


}
