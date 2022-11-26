import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../../services/persona.service';
import { Persona } from '../../interface/Persona';
import { Router } from '@angular/router';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.scss']
})
export class PersonaComponent implements OnInit {

  public dataSource: Persona[] = []
  public displayedColumns: string[] = ['NombreCompleto', 'IdentificacionCompleta', 'Email', 'FechaCreacion'];

  constructor(
    private $personaService: PersonaService,
    private router: Router) { 
  }

  ngOnInit(): void {
    this.cargarPersonas();
  }

  cargarPersonas(): void{
    this.$personaService.getPersonas().subscribe(res =>{
      this.dataSource = res;
      this.dataSource = this.mapPersona(this.dataSource);
    })
  }

  crearPersona(): void{
    this.router.navigateByUrl('/crearPersona');
  }

  cerrarSesion(): void{
    this.router.navigateByUrl('/login');
  }
  
  mapPersona(personas: Persona[]): Persona[]{
    personas.forEach(persona =>{
      persona.fechaCreacion = this.formatDate(persona.fechaCreacion)
    })
    return personas;
  }

  formatDate(date: any): Date | string{
    date = new Date(date)
    if(date != null){
      let formatted_date = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear()
      return formatted_date;
    }else{
      return date;
    }
  }

}

