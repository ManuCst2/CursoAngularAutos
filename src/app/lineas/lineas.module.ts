import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoLineasComponent } from './listado-lineas/listado-lineas.component';
import { LineasRoutingModule } from './lineas-routing.module';
import { MaterialDesingModule } from '../shared/material-desing/material-desing.module';
import { AgregarEditarLienaComponent } from './agregar-editar-liena/agregar-editar-liena.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ListadoLineasComponent,
    AgregarEditarLienaComponent
  ],
  imports: [
    CommonModule, 
    LineasRoutingModule,
    MaterialDesingModule,
    ReactiveFormsModule
  ]
})
export class LineasModule { }
