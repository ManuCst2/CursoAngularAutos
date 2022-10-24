import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Lineas } from 'src/app/models/autos.model';
import { AutosService } from 'src/app/services/autos.service';

@Component({
  selector: 'app-agregar-editar-liena',
  templateUrl: './agregar-editar-liena.component.html',
  styleUrls: ['./agregar-editar-liena.component.scss']
})
export class AgregarEditarLienaComponent implements OnInit {
  formulario: FormGroup;
  id!: number;
  TitleDesc: string = "Agregar marca";
  constructor(private servicio: AutosService, private builder: FormBuilder, private router: Router, private snackBar: MatSnackBar, private activatedRoute: ActivatedRoute) { 
    this.formulario = this.builder.group({
      nombre: ['', [Validators.required, Validators.maxLength(100)]],
      modelo: ['', [Validators.required]],
      color: ['', [Validators.required,Validators.maxLength(30)]]
    })
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'] ? +this.activatedRoute.snapshot.params['id'] : 0;
    if (this.id !== 0) {
      this.recuperar(this.id);
    }
  } 
  recuperar(id: number) {
    this.servicio.oLineaId(id).subscribe(
      result => {
        this.formulario.patchValue({
          ...result
        })
        this.snackBar.open('Linea recuperada.', 'Ok', {
          duration: 3000
        });
        this.TitleDesc = "Editar linea"
      })
  }
  GuardarLinea(){
    if(this.formulario.invalid)
      return
      const linea: Lineas = {
        ...this.formulario.value
      };
    if (this.id === 0)
      this.agregar(linea);
    else
      this.actualizar(linea);
  }

  agregar(linea: Lineas) {
    this.servicio.GuardaLinea(linea).subscribe(
      result => {
        this.snackBar.open('Se guardo la linea.', 'X', {
          duration: 3000
        });
        this.router.navigate(['/lineas'])
      }
    )
  }
  actualizar(linea: Lineas) {
    this.servicio.ActualizaLinea(this.id, linea).subscribe(
      result => {
        this.snackBar.open('Se actualizó la linea.', 'X', {
          duration: 3000
        });
        this.router.navigate(['/lineas'])
      }
    )
  }

  getControlFormulario = (valor: string) => this.formulario.get(valor);

  get nombre() {
    return this.getControlFormulario('nombre');
  }
  get modelo() {
    return this.getControlFormulario('modelo');
  }
  get color() {
    return this.getControlFormulario('color');
  }
}
