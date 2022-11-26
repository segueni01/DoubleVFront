import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../../interface/Usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  constructor(private router: Router, 
    private $authService: AuthService, 
    private snackBar: MatSnackBar,
    private fb: FormBuilder,) {
    this.form = this.fb.group({
      User : ['', Validators.required], 
      Password : ['', Validators.required]
    })

   }

  ngOnInit(): void {
  }

  ingresar() {

    if(this.form.invalid){
      this.snackBar.open('LOS CAMPOS EN ROJOS DEBEN SER COMPLETADOS!!!','',{
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'top'
      })
      return;
    }
    
    const user: Usuario = {
      user: this.form.value.User,
      password: this.form.value.Password
    }

    this.$authService.getLogin(user)
    .subscribe({

      next: (res: any) => {
        this.router.navigateByUrl('/persona');
      },

      error: (err: any) => {
        this.snackBar.open(err.error,'',{
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'top'
        })
      }
    });
  
  }

  registrar(): void {
    this.router.navigateByUrl('/crearPersona');
  }

}
