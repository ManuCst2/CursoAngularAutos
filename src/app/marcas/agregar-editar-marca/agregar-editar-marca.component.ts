import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Marcas } from 'src/app/models/autos.model';
import { AutosService } from 'src/app/services/autos.service';

@Component({
  selector: 'app-agregar-editar-marca',
  templateUrl: './agregar-editar-marca.component.html',
  styleUrls: ['./agregar-editar-marca.component.scss']
})
export class AgregarEditarMarcaComponent implements OnInit {

  formulario: FormGroup;
  id!: number;
  TitleDesc: string = "Agregar marca";
  constructor(private servicio: AutosService, private builder: FormBuilder, private router: Router, private snackBar: MatSnackBar, private activatedRoute: ActivatedRoute) {
    this.formulario = this.builder.group({
      nombre: ['', [Validators.required, Validators.maxLength(100)]],
      clase: ['', [Validators.required]]
    })
  }
  
  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'] ? +this.activatedRoute.snapshot.params['id'] : 0;
    if (this.id !== 0) {
      this.recuperar(this.id);
    }
  }
  recuperar(id: number) {
    this.servicio.oMarcaId(id).subscribe(
      result => {
        this.formulario.patchValue({
          ...result
        })
        this.snackBar.open('Marca recuperada.', 'Ok', {
          duration: 3000
        });
        this.TitleDesc = "Editar marca"
      })
  }
  GuardarMarca(){
    if(this.formulario.invalid)
      return
      const marca: Marcas = {
        ...this.formulario.value
      };
    if (this.id === 0)
      this.agregar(marca);
    else
      this.actualizar(marca);
  }
  
  agregar(Marca: Marcas) {
    this.servicio.GuardaMarca(Marca).subscribe(
      result => {
        this.snackBar.open('Se guardo la marca.', 'X', {
          duration: 3000
        });
        this.router.navigate(['/marcas'])
      }
    )
  }
  actualizar(marca: Marcas) {
    this.servicio.ActualizaMarca(this.id, marca).subscribe(
      result => {
        this.snackBar.open('Se actualizó la marca.', 'X', {
          duration: 3000
        });
        this.router.navigate(['/marcas'])
      }
    )
  }

  getControlFormulario = (valor: string) => this.formulario.get(valor);

  get desc() {
    return this.getControlFormulario('nombre');
  }
  get clase() {
    return this.getControlFormulario('clase');
  }
}
