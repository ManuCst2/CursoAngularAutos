import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoMarcasComponent } from './listado-marcas/listado-marcas.component';
import { MarcasRoutingModule } from './marcas-routing.module';
import { MaterialDesingModule } from '../shared/material-desing/material-desing.module';
import { AgregarEditarMarcaComponent } from './agregar-editar-marca/agregar-editar-marca.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ListadoMarcasComponent,
    AgregarEditarMarcaComponent
  ],
  imports: [
    CommonModule,
    MarcasRoutingModule,
    MaterialDesingModule, 
    ReactiveFormsModule
  ]
})
export class MarcasModule { }
