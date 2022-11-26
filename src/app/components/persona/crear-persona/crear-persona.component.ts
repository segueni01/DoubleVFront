import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/services/persona.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Persona } from 'src/app/interface/Persona';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-persona',
  templateUrl: './crear-persona.component.html',
  styleUrls: ['./crear-persona.component.scss']
})
export class CrearPersonaComponent implements OnInit {

  public form: FormGroup;

  constructor(
    private $personaService: PersonaService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
    this.form = this.fb.group({
      Nombre : ['', Validators.required], 
      Apellidos : ['', Validators.required], 
      NumeroIdentificacion : ['', Validators.required], 
      Email : ['', Validators.required], 
      TipoIdentificacion : ['', Validators.required],
      User : ['', Validators.required], 
      Password : ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  registrarPersona(): void {

    if(this.form.invalid){
      this.snackBar.open('LOS CAMPOS EN ROJOS DEBEN SER COMPLETADOS!!!','',{
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'top'
      })
      return;
    }

    const persona: Persona = {
      nombre: this.form.value.Nombre,
      apellidos: this.form.value.Apellidos,
      numeroIdentificacion: this.form.value.NumeroIdentificacion,
      email: this.form.value.Email,
      tipoIdentificacion: this.form.value.TipoIdentificacion,
      user: this.form.value.User,
      password: this.form.value.Password
    }

    this.$personaService.addPersona(persona)
    .subscribe({

      next: (res: any) => {
        this.snackBar.open('Persona creada exitosamente','',{
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'top'
        })
        this.router.navigateByUrl('/persona');
      },
      
      error: (err) => {
        this.snackBar.open(err.error,'',{
          duration: 6000,
          horizontalPosition: 'center',
          verticalPosition: 'top'
        })
      }
    });

  }

  regresar(): void{
    this.router.navigateByUrl('/persona');
  }

}
