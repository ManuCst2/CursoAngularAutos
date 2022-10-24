import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Register } from '../models/register.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  formulario: FormGroup;
  constructor(private servicio:AuthService,/*private builder: FormBuilder,*/ private snackBar:MatSnackBar, private router:Router) { 
    // this.formulario = this.builder.group({
    //   email: ['', [Validators.required]],
    //   password:['', [Validators.required]]
    // });
    this.formulario = new FormGroup({
      email: new FormControl<string|null>('',{
        validators:[Validators.required, Validators.email],
        nonNullable:true
      }),
      password: new FormControl<string|null>('',{
        validators:[Validators.required, Validators.minLength(4)],
        nonNullable:true
      })
    });
  }

  ngOnInit(): void {
    
  }
  register(){
    this.servicio
    .registrar(this.formulario.value)
    .subscribe(response=>{
      this.snackBar.open('Usuario registrado exitosamente','',{
        duration:3000
      });
      this.router.navigate(['/login'])
    })
  }

  getControlFormulario = (valor:string) => this.formulario.get(valor);

  get email(){
    return this.getControlFormulario('email');
  }

  get password(){
    return this.getControlFormulario('password');
  }

}
